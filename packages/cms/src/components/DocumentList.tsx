import React from 'react';
import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { FiDownload, FiTrash2 } from 'react-icons/fi';
import { uploadService } from '@ncrst/shared';

interface DocumentItem {
  id: number;
  title: string;
  description?: string;
  fileName: string;
  filePath: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
}

interface DocumentListProps {
  documents: DocumentItem[];
  onDelete?: (document: DocumentItem) => void;
}

export const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  onDelete,
}) => {
  const toast = useToast();

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDownload = (doc: DocumentItem) => {
    const fileUrl = uploadService.getFileUrl(doc.filePath);
    const link = window.document.createElement('a');
    link.href = fileUrl;
    link.download = doc.fileName;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  const handleDelete = async (doc: DocumentItem) => {
    try {
      await onDelete?.(doc);
      toast({
        title: 'Document deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to delete document',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>File Type</Th>
            <Th>Size</Th>
            <Th>Uploaded</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {documents.map((doc) => (
            <Tr key={doc.id}>
              <Td>
                <Link
                  color="blue.500"
                  href={uploadService.getFileUrl(doc.filePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.title}
                </Link>
              </Td>
              <Td>
                <Text noOfLines={2}>{doc.description}</Text>
              </Td>
              <Td>{doc.fileType}</Td>
              <Td>{formatFileSize(doc.fileSize)}</Td>
              <Td>{formatDate(doc.uploadedAt)}</Td>
              <Td>
                <HStack spacing={2}>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    variant="ghost"
                    onClick={() => handleDownload(doc)}
                    leftIcon={<Icon as={FiDownload} />}
                  >
                    Download
                  </Button>
                  {onDelete && (
                    <Button
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      onClick={() => handleDelete(doc)}
                      leftIcon={<Icon as={FiTrash2} />}
                    >
                      Delete
                    </Button>
                  )}
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}; 