import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { Vacancy } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Button,
} from '@chakra-ui/react';

interface VacancyFormProps {
  entity?: Vacancy;
  onSubmit: (data: Partial<Vacancy>) => Promise<void>;
  onCancel: () => void;
}

const VacancyForm: React.FC<VacancyFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Vacancy>>(
    entity || {
      title: '',
      department: '',
      description: '',
      requirements: '',
      responsibilities: '',
      type: 'full-time',
      status: 'open',
      location: '',
      salary: '',
      closingDate: new Date().toISOString().split('T')[0],
      contactEmail: '',
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
          <FormLabel>Job Title</FormLabel>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Department</FormLabel>
          <Input
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
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
            minHeight="150px"
            placeholder="Provide a detailed description of the position"
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
            placeholder="List all required qualifications and experience"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Responsibilities</FormLabel>
          <Textarea
            value={formData.responsibilities}
            onChange={(e) =>
              setFormData({ ...formData, responsibilities: e.target.value })
            }
            minHeight="150px"
            placeholder="List key responsibilities and duties"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Employment Type</FormLabel>
          <Select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value as Vacancy['type'] })
            }
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value as Vacancy['status'] })
            }
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="filled">Filled</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="e.g., Windhoek, Namibia"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Salary Range</FormLabel>
          <Input
            value={formData.salary}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
            placeholder="e.g., NAD 25,000 - 35,000 per month"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Closing Date</FormLabel>
          <Input
            type="date"
            value={formData.closingDate?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, closingDate: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Contact Email</FormLabel>
          <Input
            type="email"
            value={formData.contactEmail}
            onChange={(e) =>
              setFormData({ ...formData, contactEmail: e.target.value })
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

export const VacanciesPage: React.FC = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    // Fetch vacancies from API
    const fetchVacancies = async () => {
      try {
        const response = await fetch('/api/vacancies');
        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error('Failed to fetch vacancies:', error);
      }
    };
    fetchVacancies();
  }, []);

  const handleAdd = async (data: Partial<Vacancy>) => {
    try {
      const response = await fetch('/api/vacancies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newVacancy = await response.json();
      setVacancies([...vacancies, newVacancy]);
    } catch (error) {
      throw new Error('Failed to create vacancy');
    }
  };

  const handleEdit = async (data: Partial<Vacancy>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/vacancies/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedVacancy = await response.json();
      setVacancies(
        vacancies.map((vacancy) =>
          vacancy.id === updatedVacancy.id ? updatedVacancy : vacancy
        )
      );
    } catch (error) {
      throw new Error('Failed to update vacancy');
    }
  };

  const handleDelete = async (vacancy: Vacancy) => {
    try {
      await fetch(`/api/vacancies/${vacancy.id}`, {
        method: 'DELETE',
      });
      setVacancies(vacancies.filter((v) => v.id !== vacancy.id));
    } catch (error) {
      throw new Error('Failed to delete vacancy');
    }
  };

  const columns = [
    { key: 'title' as keyof Vacancy, label: 'Title' },
    { key: 'department' as keyof Vacancy, label: 'Department' },
    { key: 'type' as keyof Vacancy, label: 'Type' },
    { key: 'status' as keyof Vacancy, label: 'Status' },
    {
      key: 'closingDate' as keyof Vacancy,
      label: 'Closing Date',
      render: (value: string | number) => typeof value === 'string' ? new Date(value).toLocaleDateString() : '',
    },
  ];

  return (
    <EntityManager
      title="Vacancies"
      entities={vacancies}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={VacancyForm}
    />
  );
}; 