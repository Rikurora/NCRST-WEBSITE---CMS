import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import { AiInitiative } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Button,
  useToast,
} from '@chakra-ui/react';

interface AiInitiativeFormProps {
  entity?: AiInitiative;
  onSubmit: (data: Partial<AiInitiative>) => Promise<void>;
  onCancel: () => void;
}

const AiInitiativeForm: React.FC<AiInitiativeFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<AiInitiative>>(
    entity || {
      title: '',
      description: '',
      status: 'planned',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      budget: 0,
      objectives: '',
      outcomes: '',
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
            placeholder="Describe the AI initiative, its goals, and expected impact"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value as AiInitiative['status'] })
            }
          >
            <option value="planned">Planned</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Start Date</FormLabel>
          <Input
            type="date"
            value={formData.startDate?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input
            type="date"
            value={formData.endDate?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Budget (NAD)</FormLabel>
          <Input
            type="number"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: parseFloat(e.target.value) || 0 })
            }
            min={0}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Objectives</FormLabel>
          <Textarea
            value={formData.objectives}
            onChange={(e) =>
              setFormData({ ...formData, objectives: e.target.value })
            }
            minHeight="150px"
            placeholder="List the main objectives and goals of this initiative"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Outcomes</FormLabel>
          <Textarea
            value={formData.outcomes}
            onChange={(e) =>
              setFormData({ ...formData, outcomes: e.target.value })
            }
            minHeight="150px"
            placeholder="List the achieved or expected outcomes of this initiative"
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

export const AiInitiativesPage: React.FC = () => {
  const [initiatives, setInitiatives] = useState<AiInitiative[]>([]);
  const toast = useToast();

  useEffect(() => {
    // Fetch initiatives from API
    const fetchInitiatives = async () => {
      try {
        const response = await fetch('/api/ai-initiatives');
        const data = await response.json();
        setInitiatives(data);
      } catch (error) {
        toast({
          title: 'Failed to fetch initiatives',
          description: error instanceof Error ? error.message : 'Unknown error',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchInitiatives();
  }, [toast]);

  const handleAdd = async (data: Partial<AiInitiative>) => {
    try {
      const response = await fetch('/api/ai-initiatives', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newInitiative = await response.json();
      setInitiatives([...initiatives, newInitiative]);
    } catch (error) {
      console.error('Failed to create initiative:', error);
      throw new Error('Failed to create initiative');
    }
  };

  const handleEdit = async (data: Partial<AiInitiative>) => {
    try {
      const response = await fetch(`/api/ai-initiatives/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedInitiative = await response.json();
      setInitiatives(
        initiatives.map((initiative) =>
          initiative.id === updatedInitiative.id ? updatedInitiative : initiative
        )
      );
    } catch (error) {
      console.error('Failed to update initiative:', error);
      throw new Error('Failed to update initiative');
    }
  };

  const handleDelete = async (initiative: AiInitiative) => {
    try {
      await fetch(`/api/ai-initiatives/${initiative.id}`, {
        method: 'DELETE',
      });
      setInitiatives(initiatives.filter((i) => i.id !== initiative.id));
    } catch (error) {
      console.error('Failed to delete initiative:', error);
      throw new Error('Failed to delete initiative');
    }
  };

  const columns = [
    { key: 'title' as keyof AiInitiative, label: 'Title' },
    { key: 'status' as keyof AiInitiative, label: 'Status' },
    {
      key: 'startDate' as keyof AiInitiative,
      label: 'Start Date',
      render: (value: string | number | undefined) => {
        if (typeof value === 'string') {
          return new Date(value).toLocaleDateString();
        }
        return '';
      },
    },
  ];

  return (
    <EntityManager
      title="AI Initiatives"
      entities={initiatives}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={AiInitiativeForm}
    />
  );
}; 