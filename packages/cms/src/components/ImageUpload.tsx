import React, { useState } from 'react';
import {
  Box,
  Button,
  Image,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { FileUpload, type UploadResponse } from '@ncrst/shared';

interface ImageUploadProps {
  onUploadComplete: (response: UploadResponse) => void;
  defaultImage?: string;
  maxSize?: number;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onUploadComplete,
  defaultImage,
  maxSize = 5 * 1024 * 1024, // 5MB
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(defaultImage || null);
  const toast = useToast();

  const handleUploadComplete = (response: UploadResponse) => {
    setSelectedImage(response.file_path);
    onUploadComplete(response);
    toast({
      title: 'Image uploaded successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUploadError = (error: Error) => {
    toast({
      title: 'Upload failed',
      description: error.message,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} width="100%">
      {selectedImage && (
        <Box position="relative" width="100%">
          <Image
            src={selectedImage}
            alt="Selected image"
            maxHeight="200px"
            objectFit="contain"
            borderRadius="md"
          />
          <Button
            size="sm"
            position="absolute"
            top={2}
            right={2}
            onClick={() => setSelectedImage(null)}
          >
            Remove
          </Button>
        </Box>
      )}

      {!selectedImage && (
        <FileUpload
          onUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
          maxSize={maxSize}
          allowedTypes={['image/jpeg', 'image/png', 'image/gif']}
          isImage
        />
      )}

      {selectedImage && (
        <Text fontSize="sm" color="gray.500">
          Click "Remove" to upload a different image
        </Text>
      )}
    </VStack>
  );
}; 