import React, { useState, useRef } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

interface ImageCropperProps {
  src: string;
  onCropComplete: (croppedImage: Blob) => void;
  aspectRatio?: number;
  minWidth?: number;
  minHeight?: number;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({
  src,
  onCropComplete,
  aspectRatio,
  minWidth = 100,
  minHeight = 100,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 90,
    height: 90,
    x: 5,
    y: 5,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const getCroppedImg = (
    image: HTMLImageElement,
    pixelCrop: PixelCrop,
    fileName: string
  ): Promise<Blob> => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('No 2d context');
    }

    // Set canvas dimensions to match the cropped image size
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
            return;
          }
          resolve(blob);
        },
        'image/jpeg',
        0.95
      );
    });
  };

  const handleCropComplete = async () => {
    if (!completedCrop || !imgRef.current) return;

    try {
      const croppedImage = await getCroppedImg(
        imgRef.current,
        completedCrop,
        'cropped.jpg'
      );
      onCropComplete(croppedImage);
      onClose();
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crop Image</ModalHeader>
        <ModalBody>
          <Box maxHeight="600px" overflow="auto">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspectRatio}
              minWidth={minWidth}
              minHeight={minHeight}
            >
              <img
                ref={imgRef}
                src={src}
                alt="Crop me"
                style={{ maxWidth: '100%' }}
              />
            </ReactCrop>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleCropComplete}>
            Crop & Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}; 