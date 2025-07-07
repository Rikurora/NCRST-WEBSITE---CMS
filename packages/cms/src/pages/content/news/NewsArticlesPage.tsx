import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../../components/common/EntityManager';
import type { NewsArticle, NewsCategory } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Button,
} from '@chakra-ui/react';

interface NewsArticleFormProps {
  entity?: NewsArticle;
  onSubmit: (data: Partial<NewsArticle>) => Promise<void>;
  onCancel: () => void;
}

const NewsArticleForm: React.FC<NewsArticleFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<NewsArticle>>(
    entity || {
      title: '',
      content: '',
      publishDate: new Date().toISOString().split('T')[0],
      image: '',
    }
  );

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
          <FormLabel>Content</FormLabel>
          <Textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            minHeight="200px"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            value={formData.category?.id}
            onChange={(e) => {
              const selectedCategory = categories.find(c => c.id === Number(e.target.value));
              setFormData({ ...formData, category: selectedCategory });
            }}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Publication Date</FormLabel>
          <Input
            type="date"
            value={formData.publishDate?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, publishDate: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
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

export const NewsArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [categories, setCategories] = useState<NewsCategory[]>([]);

  useEffect(() => {
    // Fetch articles and categories from API
    const fetchData = async () => {
      try {
        const [articlesResponse, categoriesResponse] = await Promise.all([
          fetch('/api/news-articles'),
          fetch('/api/news-categories')
        ]);
        const [articlesData, categoriesData] = await Promise.all([
          articlesResponse.json(),
          categoriesResponse.json()
        ]);
        setArticles(articlesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async (data: Partial<NewsArticle>) => {
    try {
      const response = await fetch('/api/news-articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newArticle = await response.json();
      setArticles([...articles, newArticle]);
    } catch (error) {
      throw new Error('Failed to create article');
    }
  };

  const handleEdit = async (data: Partial<NewsArticle>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/news-articles/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedArticle = await response.json();
      setArticles(
        articles.map((article) =>
          article.id === updatedArticle.id ? updatedArticle : article
        )
      );
    } catch (error) {
      throw new Error('Failed to update article');
    }
  };

  const handleDelete = async (article: NewsArticle) => {
    try {
      await fetch(`/api/news-articles/${article.id}`, {
        method: 'DELETE',
      });
      setArticles(articles.filter((a) => a.id !== article.id));
    } catch (error) {
      throw new Error('Failed to delete article');
    }
  };

  const columns = [
    { key: 'title' as keyof NewsArticle, label: 'Title' },
    {
      key: 'category' as keyof NewsArticle,
      label: 'Category',
      render: (value: unknown) => {
        const category = value as NewsCategory;
        return category?.name || 'N/A';
      }
    },
    {
      key: 'publishDate' as keyof NewsArticle,
      label: 'Publication Date',
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
      title="News Articles"
      entities={articles}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={NewsArticleForm}
    />
  );
}; 