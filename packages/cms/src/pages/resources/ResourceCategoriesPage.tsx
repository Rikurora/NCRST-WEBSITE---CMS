import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { ResourceCategory } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Button,
  useToast,
} from '@chakra-ui/react';

interface ResourceCategoryFormProps {
  entity?: ResourceCategory;
  onSubmit: (data: Partial<ResourceCategory>) => Promise<void>;
  onCancel: () => void;
}

const ResourceCategoryForm: React.FC<ResourceCategoryFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<ResourceCategory>>(
    entity || {
      name: '',
      description: '',
      slug: '',
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
          <FormLabel>Name</FormLabel>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Slug</FormLabel>
          <Input
            value={formData.slug}
            onChange={(e) =>
              setFormData({ ...formData, slug: e.target.value })
            }
            placeholder="category-slug"
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

        <Button type="submit" colorScheme="blue" mr={3}>
          {entity ? 'Update' : 'Create'}
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </VStack>
    </form>
  );
};

export const ResourceCategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<ResourceCategory[]>([]);
  const toast = useToast();

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/resource-categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        toast({
          title: 'Failed to fetch categories',
          description: error instanceof Error ? error.message : 'Unknown error',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchCategories();
  }, [toast]);

  const handleAdd = async (data: Partial<ResourceCategory>) => {
    try {
      const response = await fetch('/api/resource-categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newCategory = await response.json();
      setCategories([...categories, newCategory]);
    } catch (error) {
      console.error('Failed to create category:', error);
      throw new Error('Failed to create category');
    }
  };

  const handleEdit = async (data: Partial<ResourceCategory>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/resource-categories/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedCategory = await response.json();
      setCategories(
        categories.map((cat) =>
          cat.id === updatedCategory.id ? updatedCategory : cat
        )
      );
    } catch (error) {
      console.error('Failed to update category:', error);
      throw new Error('Failed to update category');
    }
  };

  const handleDelete = async (category: ResourceCategory) => {
    try {
      await fetch(`/api/resource-categories/${category.id}`, {
        method: 'DELETE',
      });
      setCategories(categories.filter((cat) => cat.id !== category.id));
    } catch (error) {
      console.error('Failed to delete category:', error);
      throw new Error('Failed to delete category');
    }
  };

  const columns = [
    { key: 'name' as keyof ResourceCategory, label: 'Name' },
    { key: 'slug' as keyof ResourceCategory, label: 'Slug' },
    { key: 'description' as keyof ResourceCategory, label: 'Description' },
  ];

  return (
    <EntityManager
      title="Resource Categories"
      entities={categories}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={ResourceCategoryForm}
    />
  );
}; 