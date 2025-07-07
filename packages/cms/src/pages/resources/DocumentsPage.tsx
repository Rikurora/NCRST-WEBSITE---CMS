import React, { useState, useCallback, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { Resource } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Button,
  useToast,
} from '@chakra-ui/react';

interface DocumentFormProps {
  entity?: Resource;
  onSubmit: (data: Partial<Resource>) => Promise<void>;
  onCancel: () => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Resource>>(
    entity || {
      title: '',
      description: '',
      fileName: '',
      filePath: '',
      fileType: '',
      fileSize: 0,
      uploadedAt: new Date().toISOString().split('T')[0],
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            minHeight="150px"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>File Name</FormLabel>
          <Input
            value={formData.fileName}
            onChange={(e) =>
              setFormData({ ...formData, fileName: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>File Path</FormLabel>
          <Input
            value={formData.filePath}
            onChange={(e) =>
              setFormData({ ...formData, filePath: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>File Type</FormLabel>
          <Input
            value={formData.fileType}
            onChange={(e) =>
              setFormData({ ...formData, fileType: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>File Size (bytes)</FormLabel>
          <Input
            type="number"
            value={formData.fileSize}
            onChange={(e) =>
              setFormData({ ...formData, fileSize: parseInt(e.target.value) || 0 })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Upload Date</FormLabel>
          <Input
            type="date"
            value={formData.uploadedAt?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, uploadedAt: e.target.value })
            }
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" mr={3}>
          {entity ? 'Update' : 'Create'}
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </VStack>
    </form>
  );
};

export const DocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState<Resource[]>([]);
  const toast = useToast();

  const fetchDocuments = useCallback(async () => {
    try {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setDocuments(data);
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

  const handleAdd = async (data: Partial<Resource>) => {
    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newDocument = await response.json();
      setDocuments([...documents, newDocument]);
    } catch (error) {
      console.error('Failed to create document:', error);
      throw new Error('Failed to create document');
    }
  };

  const handleEdit = async (data: Partial<Resource>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/resources/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedDocument = await response.json();
      setDocuments(
        documents.map((doc) =>
          doc.id === updatedDocument.id ? updatedDocument : doc
        )
      );
    } catch (error) {
      console.error('Failed to update document:', error);
      throw new Error('Failed to update document');
    }
  };

  const handleDelete = async (document: Resource) => {
    try {
      await fetch(`/api/resources/${document.id}`, {
        method: 'DELETE',
      });
      setDocuments(documents.filter((doc) => doc.id !== document.id));
    } catch (error) {
      console.error('Failed to delete document:', error);
      throw new Error('Failed to delete document');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const columns = [
    { key: 'title' as keyof Resource, label: 'Title' },
    { key: 'description' as keyof Resource, label: 'Description' },
    { key: 'fileName' as keyof Resource, label: 'File Name' },
    {
      key: 'fileSize' as keyof Resource,
      label: 'File Size',
      render: (value: unknown) => {
        if (typeof value === 'number') {
          return formatFileSize(value);
        }
        return '';
      },
    },
    {
      key: 'uploadedAt' as keyof Resource,
      label: 'Upload Date',
      render: (value: unknown) => {
        if (typeof value === 'string') {
          return new Date(value).toLocaleDateString();
        }
        return '';
      },
    },
  ];

  return (
    <EntityManager
      title="Resource Documents"
      entities={documents}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={DocumentForm}
    />
  );
}; 