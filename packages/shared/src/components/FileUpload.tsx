import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Icon,
  Image,
  Progress,
  Text,
  useToast,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiFile, FiX } from 'react-icons/fi';
import { uploadService, UploadResponse, UploadProgress } from '../services/upload';

interface FileUploadProps {
  onUploadComplete: (response: UploadResponse) => void;
  onUploadError?: (error: Error) => void;
  maxSize?: number;
  allowedTypes?: string[];
  isImage?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  onUploadError,
  maxSize,
  allowedTypes,
  isImage = false,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];
      if (!selectedFile) return;

      const validationError = uploadService.validateFile(selectedFile, {
        maxSize,
        allowedTypes,
      });

      if (validationError) {
        toast({
          title: 'Invalid file',
          description: validationError,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      setFile(selectedFile);

      if (isImage) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }
    },
    [maxSize, allowedTypes, isImage, toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: allowedTypes
      ? Object.fromEntries(allowedTypes.map(type => [type, []]))
      : undefined,
    maxSize,
    multiple: false,
  });

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    try {
      const uploadFn = isImage ? uploadService.uploadImage : uploadService.uploadFile;
      const response = await uploadFn(file, {
        maxSize,
        allowedTypes,
        onProgress: setUploadProgress,
      });
      onUploadComplete(response);
      setFile(null);
      setPreview(null);
      setUploadProgress(null);
      toast({
        title: 'Upload successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      const err = error as Error;
      onUploadError?.(err);
      toast({
        title: 'Upload failed',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    setUploadProgress(null);
  };

  return (
    <VStack spacing={4} width="100%">
      <Box
        {...getRootProps()}
        width="100%"
        height="200px"
        border="2px dashed"
        borderColor={isDragActive ? 'blue.500' : 'gray.200'}
        borderRadius="md"
        p={4}
        cursor="pointer"
        transition="all 0.2s"
        _hover={{ borderColor: 'blue.500' }}
      >
        <input {...getInputProps()} />
        <Center height="100%">
          <VStack spacing={2}>
            <Icon as={FiUpload} w={8} h={8} color="gray.400" />
            <Text textAlign="center" color="gray.500">
              {isDragActive
                ? 'Drop the file here'
                : 'Drag and drop a file here, or click to select'}
            </Text>
          </VStack>
        </Center>
      </Box>

      {file && (
        <Box width="100%">
          {preview && isImage ? (
            <Image
              src={preview}
              alt="Preview"
              maxHeight="200px"
              objectFit="contain"
              borderRadius="md"
            />
          ) : (
            <Box p={4} bg="gray.50" borderRadius="md">
              <HStack spacing={2}>
                <Icon as={FiFile} />
                <Text>{file.name}</Text>
                <Text color="gray.500" fontSize="sm">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </Text>
              </HStack>
            </Box>
          )}

          {uploadProgress && (
            <Progress
              value={uploadProgress.percentage}
              size="sm"
              colorScheme="blue"
              mt={2}
            />
          )}

          <HStack spacing={2} mt={2}>
            <Button
              onClick={handleUpload}
              colorScheme="blue"
              isLoading={isUploading}
              leftIcon={<Icon as={FiUpload} />}
            >
              Upload
            </Button>
            <Button
              onClick={handleRemove}
              variant="ghost"
              leftIcon={<Icon as={FiX} />}
            >
              Remove
            </Button>
          </HStack>
        </Box>
      )}
    </VStack>
  );
}; 