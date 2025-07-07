import React, { useState, useCallback, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { ResearchGrant } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Button,
  NumberInput,
  NumberInputField,
  useToast,
} from '@chakra-ui/react';

interface ResearchGrantFormProps {
  entity?: ResearchGrant;
  onSubmit: (data: Partial<ResearchGrant>) => Promise<void>;
  onCancel: () => void;
}

const ResearchGrantForm: React.FC<ResearchGrantFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<ResearchGrant>>(
    entity || {
      title: '',
      description: '',
      amount: 0,
      deadline: new Date().toISOString().split('T')[0],
      requirements: '',
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
          <FormLabel>Amount (NAD)</FormLabel>
          <NumberInput
            value={formData.amount}
            onChange={(value) =>
              setFormData({ ...formData, amount: parseFloat(value) || 0 })
            }
            min={0}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Deadline</FormLabel>
          <Input
            type="date"
            value={formData.deadline?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Requirements</FormLabel>
          <Textarea
            value={formData.requirements}
            onChange={(e) =>
              setFormData({ ...formData, requirements: e.target.value })
            }
            minHeight="150px"
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

export const ResearchGrantsPage: React.FC = () => {
  const [grants, setGrants] = useState<ResearchGrant[]>([]);
  const toast = useToast();

  const fetchGrants = useCallback(async () => {
    try {
      const response = await fetch('/api/research-grants');
      const data = await response.json();
      setGrants(data);
    } catch (error) {
      toast({
        title: 'Failed to fetch grants',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    fetchGrants();
  }, [fetchGrants]);

  const handleAdd = async (data: Partial<ResearchGrant>) => {
    try {
      const response = await fetch('/api/research-grants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newGrant = await response.json();
      setGrants([...grants, newGrant]);
    } catch (error) {
      console.error('Failed to create grant:', error);
      throw new Error('Failed to create grant');
    }
  };

  const handleEdit = async (data: Partial<ResearchGrant>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/research-grants/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedGrant = await response.json();
      setGrants(
        grants.map((grant) =>
          grant.id === updatedGrant.id ? updatedGrant : grant
        )
      );
    } catch (error) {
      console.error('Failed to update grant:', error);
      throw new Error('Failed to update grant');
    }
  };

  const handleDelete = async (grant: ResearchGrant) => {
    try {
      await fetch(`/api/research-grants/${grant.id}`, {
        method: 'DELETE',
      });
      setGrants(grants.filter((g) => g.id !== grant.id));
    } catch (error) {
      console.error('Failed to delete grant:', error);
      throw new Error('Failed to delete grant');
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NA', {
      style: 'currency',
      currency: 'NAD',
    }).format(amount);
  };

  const columns = [
    { key: 'title' as keyof ResearchGrant, label: 'Title' },
    { key: 'description' as keyof ResearchGrant, label: 'Description' },
    {
      key: 'amount' as keyof ResearchGrant,
      label: 'Amount',
      render: (value: unknown) => {
        if (typeof value === 'number') {
          return formatCurrency(value);
        }
        return '';
      },
    },
    {
      key: 'deadline' as keyof ResearchGrant,
      label: 'Deadline',
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
      title="Research Grants"
      entities={grants}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={ResearchGrantForm}
    />
  );
}; 