import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { ResearchPermit } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Button,
} from '@chakra-ui/react';

interface ResearchPermitFormProps {
  entity?: ResearchPermit;
  onSubmit: (data: Partial<ResearchPermit>) => Promise<void>;
  onCancel: () => void;
}

const ResearchPermitForm: React.FC<ResearchPermitFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<ResearchPermit>>(
    entity || {
      title: '',
      description: '',
      status: 'pending',
      submissionDate: new Date().toISOString().split('T')[0],
      applicant: '',
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

        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            minHeight="200px"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            value={formData.status}
            onChange={(e) =>
              setFormData({ 
                ...formData, 
                status: e.target.value as ResearchPermit['status'] 
              })
            }
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Submission Date</FormLabel>
          <Input
            type="date"
            value={formData.submissionDate?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, submissionDate: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Applicant</FormLabel>
          <Input
            value={formData.applicant}
            onChange={(e) =>
              setFormData({ ...formData, applicant: e.target.value })
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

export const ResearchPermitsPage: React.FC = () => {
  const [permits, setPermits] = useState<ResearchPermit[]>([]);

  useEffect(() => {
    // Fetch permits from API
    const fetchPermits = async () => {
      try {
        const response = await fetch('/api/research-permits');
        const data = await response.json();
        setPermits(data);
      } catch (error) {
        console.error('Failed to fetch permits:', error);
      }
    };
    fetchPermits();
  }, []);

  const handleAdd = async (data: Partial<ResearchPermit>) => {
    try {
      const response = await fetch('/api/research-permits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newPermit = await response.json();
      setPermits([...permits, newPermit]);
    } catch (error) {
      console.error('Failed to create permit:', error);
      throw new Error('Failed to create permit');
    }
  };

  const handleEdit = async (data: Partial<ResearchPermit>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/research-permits/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedPermit = await response.json();
      setPermits(
        permits.map((permit) =>
          permit.id === updatedPermit.id ? updatedPermit : permit
        )
      );
    } catch (error) {
      console.error('Failed to update permit:', error);
      throw new Error('Failed to update permit');
    }
  };

  const handleDelete = async (permit: ResearchPermit) => {
    try {
      await fetch(`/api/research-permits/${permit.id}`, {
        method: 'DELETE',
      });
      setPermits(permits.filter((p) => p.id !== permit.id));
    } catch (error) {
      console.error('Failed to delete permit:', error);
      throw new Error('Failed to delete permit');
    }
  };

  const columns = [
    { key: 'title' as keyof ResearchPermit, label: 'Title' },
    { key: 'applicant' as keyof ResearchPermit, label: 'Applicant' },
    { key: 'status' as keyof ResearchPermit, label: 'Status' },
    {
      key: 'submissionDate' as keyof ResearchPermit,
      label: 'Submission Date',
      render: (value: unknown) => {
        if (typeof value === 'string') {
          return new Date(value).toLocaleDateString();
        }
        return '';
      }
    },
  ];

  return (
    <EntityManager
      title="Research Permits"
      entities={permits}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={ResearchPermitForm}
    />
  );
}; 