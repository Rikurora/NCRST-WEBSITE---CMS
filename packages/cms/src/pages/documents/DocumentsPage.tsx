import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { DocumentUpload } from '../../components/DocumentUpload';
import { DocumentList } from '../../components/DocumentList';
import { apiService } from '@ncrst/shared';

interface Document {
  id: number;
  title: string;
  description?: string;
  fileName: string;
  filePath: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
}

interface UploadResponse {
  title: string;
  description?: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
}

export const DocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const fetchDocuments = useCallback(async () => {
    try {
      const response = await apiService.getAll<Document>('/documents');
      setDocuments(response);
    } catch (error) {
      toast({
        title: 'Failed to fetch documents',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  const handleUploadComplete = async (uploadResponse: UploadResponse) => {
    try {
      const documentData = {
        title: uploadResponse.title,
        description: uploadResponse.description,
        fileName: uploadResponse.file_name,
        filePath: uploadResponse.file_path,
        fileType: uploadResponse.file_type,
        fileSize: uploadResponse.file_size,
      };

      await apiService.create('/documents', documentData);
      await fetchDocuments();
      onClose();
      toast({
        title: 'Document uploaded successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to save document',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (document: Document) => {
    try {
      await apiService.delete('/documents', document.id);
      await fetchDocuments();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to delete document');
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing="8" alignItems="stretch">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="lg">Documents</Heading>
          <Button colorScheme="blue" onClick={onOpen}>
            Upload Document
          </Button>
        </Box>

        <DocumentList documents={documents} onDelete={handleDelete} />

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload Document</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <DocumentUpload onUploadComplete={handleUploadComplete} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
}; 