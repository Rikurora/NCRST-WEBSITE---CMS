import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import { Award } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Button,
  useToast,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

interface AwardFormProps {
  entity?: Award;
  onSubmit: (data: Partial<Award>) => Promise<void>;
  onCancel: () => void;
}

const AwardForm: React.FC<AwardFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Award>>(
    entity || {
      title: '',
      recipient: '',
      description: '',
      category: 'research',
      year: new Date().getFullYear(),
      presentationDate: new Date().toISOString().split('T')[0],
      citation: '',
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
          <FormLabel>Recipient</FormLabel>
          <Input
            value={formData.recipient}
            onChange={(e) =>
              setFormData({ ...formData, recipient: e.target.value })
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
          <FormLabel>Category</FormLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="research">Research Excellence</option>
            <option value="innovation">Innovation</option>
            <option value="technology">Technology</option>
            <option value="science">Science Achievement</option>
            <option value="lifetime">Lifetime Achievement</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Year</FormLabel>
          <NumberInput
            value={formData.year}
            onChange={(value) =>
              setFormData({ ...formData, year: parseInt(value) || new Date().getFullYear() })
            }
            min={1900}
            max={2100}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Presentation Date</FormLabel>
          <Input
            type="date"
            value={formData.presentationDate?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, presentationDate: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Citation</FormLabel>
          <Textarea
            value={formData.citation}
            onChange={(e) =>
              setFormData({ ...formData, citation: e.target.value })
            }
            minHeight="100px"
            placeholder="Optional citation or quote about the award"
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

export const AwardsPage: React.FC = () => {
  const [awards, setAwards] = useState<Award[]>([]);
  const toast = useToast();

  useEffect(() => {
    // Fetch awards from API
    const fetchAwards = async () => {
      try {
        const response = await fetch('/api/awards');
        const data = await response.json();
        setAwards(data);
      } catch (error) {
        toast({
          title: 'Failed to fetch awards',
          description: error instanceof Error ? error.message : 'Unknown error',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchAwards();
  }, [toast]);

  const handleAdd = async (data: Partial<Award>) => {
    try {
      const response = await fetch('/api/awards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newAward = await response.json();
      setAwards([...awards, newAward]);
    } catch (error) {
      console.error('Failed to create award:', error);
      throw new Error('Failed to create award');
    }
  };

  const handleEdit = async (data: Partial<Award>) => {
    try {
      const response = await fetch(`/api/awards/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedAward = await response.json();
      setAwards(
        awards.map((award) =>
          award.id === updatedAward.id ? updatedAward : award
        )
      );
    } catch (error) {
      console.error('Failed to update award:', error);
      throw new Error('Failed to update award');
    }
  };

  const handleDelete = async (award: Award) => {
    try {
      await fetch(`/api/awards/${award.id}`, {
        method: 'DELETE',
      });
      setAwards(awards.filter((a) => a.id !== award.id));
    } catch (error) {
      console.error('Failed to delete award:', error);
      throw new Error('Failed to delete award');
    }
  };

  const columns = [
    { key: 'title' as keyof Award, label: 'Title' },
    { key: 'recipient' as keyof Award, label: 'Recipient' },
    { key: 'category' as keyof Award, label: 'Category' },
    { key: 'year' as keyof Award, label: 'Year' },
    {
      key: 'presentationDate' as keyof Award,
      label: 'Presentation Date',
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
      title="Awards"
      entities={awards}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={AwardForm}
    />
  );
}; 