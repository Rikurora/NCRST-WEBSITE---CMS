import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../../components/common/EntityManager';
import type { NewsCategory } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Button,
} from '@chakra-ui/react';

interface NewsCategoryFormProps {
  entity?: NewsCategory;
  onSubmit: (data: Partial<NewsCategory>) => Promise<void>;
  onCancel: () => void;
}

const NewsCategoryForm: React.FC<NewsCategoryFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<NewsCategory>>(
    entity || {
      name: '',
      description: '',
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
          <FormLabel>Category Name</FormLabel>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="e.g., Research, Innovation, Science"
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
            placeholder="Describe what types of articles belong to this category"
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

export const NewsCategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<NewsCategory[]>([]);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/news-categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleAdd = async (data: Partial<NewsCategory>) => {
    try {
      const response = await fetch('/api/news-categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newCategory = await response.json();
      setCategories([...categories, newCategory]);
    } catch (error) {
      throw new Error('Failed to create category');
    }
  };

  const handleEdit = async (data: Partial<NewsCategory>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/news-categories/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedCategory = await response.json();
      setCategories(
        categories.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        )
      );
    } catch (error) {
      throw new Error('Failed to update category');
    }
  };

  const handleDelete = async (category: NewsCategory) => {
    try {
      await fetch(`/api/news-categories/${category.id}`, {
        method: 'DELETE',
      });
      setCategories(categories.filter((c) => c.id !== category.id));
    } catch (error) {
      throw new Error('Failed to delete category');
    }
  };

  const columns = [
    { key: 'name' as keyof NewsCategory, label: 'Name' },
    { key: 'description' as keyof NewsCategory, label: 'Description' },
  ];

  return (
    <EntityManager
      title="News Categories"
      entities={categories}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={NewsCategoryForm}
    />
  );
}; 