import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { FileUpload, UploadResponse } from '@ncrst/shared';

interface DocumentUploadProps {
  onUploadComplete: (response: UploadResponse & { title: string; description?: string }) => void;
  maxSize?: number;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onUploadComplete,
  maxSize = 10 * 1024 * 1024, // 10MB
}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [uploadedFile, setUploadedFile] = React.useState<UploadResponse | null>(null);
  const toast = useToast();

  const handleUploadComplete = (response: UploadResponse) => {
    setUploadedFile(response);
    if (!title) {
      setTitle(response.file_name);
    }
    onUploadComplete({
      ...response,
      title,
      description,
    });
    toast({
      title: 'Document uploaded successfully',
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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (uploadedFile) {
      onUploadComplete({
        ...uploadedFile,
        title: e.target.value,
        description,
      });
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    if (uploadedFile) {
      onUploadComplete({
        ...uploadedFile,
        title,
        description: e.target.value,
      });
    }
  };

  return (
    <VStack spacing={4} width="100%">
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter document title"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter document description"
          rows={3}
        />
      </FormControl>

      <Box width="100%">
        <FileUpload
          onUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
          maxSize={maxSize}
          allowedTypes={[
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ]}
        />
      </Box>
    </VStack>
  );
}; 