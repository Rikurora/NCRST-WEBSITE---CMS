import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { InternshipProgram } from '@ncrst/shared';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Button,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

interface InternshipProgramFormProps {
  entity?: InternshipProgram;
  onSubmit: (data: Partial<InternshipProgram>) => Promise<void>;
  onCancel: () => void;
}

const InternshipProgramForm: React.FC<InternshipProgramFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<InternshipProgram>>(
    entity || {
      title: '',
      department: '',
      description: '',
      requirements: '',
      duration: '',
      stipend: '',
      status: 'open',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      applicationDeadline: new Date().toISOString().split('T')[0],
      benefits: '',
      mentorName: '',
      mentorEmail: '',
      maxPositions: 1,
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
          <FormLabel>Program Title</FormLabel>
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
            placeholder="Provide a detailed description of the internship program"
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
            placeholder="List all required qualifications and skills"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Duration</FormLabel>
          <Input
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            placeholder="e.g., 3 months, 6 months"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Stipend</FormLabel>
          <Input
            value={formData.stipend}
            onChange={(e) =>
              setFormData({ ...formData, stipend: e.target.value })
            }
            placeholder="e.g., NAD 5,000 per month"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value as InternshipProgram['status'] })
            }
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="filled">Filled</option>
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

        <FormControl isRequired>
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
          <FormLabel>Application Deadline</FormLabel>
          <Input
            type="date"
            value={formData.applicationDeadline?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, applicationDeadline: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Benefits</FormLabel>
          <Textarea
            value={formData.benefits}
            onChange={(e) =>
              setFormData({ ...formData, benefits: e.target.value })
            }
            minHeight="100px"
            placeholder="List all benefits provided to interns"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Mentor Name</FormLabel>
          <Input
            value={formData.mentorName}
            onChange={(e) =>
              setFormData({ ...formData, mentorName: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Mentor Email</FormLabel>
          <Input
            type="email"
            value={formData.mentorEmail}
            onChange={(e) =>
              setFormData({ ...formData, mentorEmail: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Maximum Positions</FormLabel>
          <NumberInput
            value={formData.maxPositions}
            onChange={(valueString) =>
              setFormData({ ...formData, maxPositions: parseInt(valueString) || 1 })
            }
            min={1}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <Button type="submit" colorScheme="blue" mr={3}>
          {entity ? 'Update' : 'Create'}
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </VStack>
    </form>
  );
};

export const InternshipProgramsPage: React.FC = () => {
  const [programs, setPrograms] = useState<InternshipProgram[]>([]);

  useEffect(() => {
    // Fetch internship programs from API
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/internship-programs');
        const data = await response.json();
        setPrograms(data);
      } catch (error) {
        console.error('Failed to fetch internship programs:', error);
      }
    };
    fetchPrograms();
  }, []);

  const handleAdd = async (data: Partial<InternshipProgram>) => {
    try {
      const response = await fetch('/api/internship-programs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newProgram = await response.json();
      setPrograms([...programs, newProgram]);
    } catch (error) {
      throw new Error('Failed to create internship program');
    }
  };

  const handleEdit = async (data: Partial<InternshipProgram>) => {
    if (!data.id) return;
    try {
      const response = await fetch(`/api/internship-programs/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedProgram = await response.json();
      setPrograms(
        programs.map((program) =>
          program.id === updatedProgram.id ? updatedProgram : program
        )
      );
    } catch (error) {
      throw new Error('Failed to update internship program');
    }
  };

  const handleDelete = async (program: InternshipProgram) => {
    try {
      await fetch(`/api/internship-programs/${program.id}`, {
        method: 'DELETE',
      });
      setPrograms(programs.filter((p) => p.id !== program.id));
    } catch (error) {
      throw new Error('Failed to delete internship program');
    }
  };

  const columns = [
    { key: 'title' as keyof InternshipProgram, label: 'Title' },
    { key: 'department' as keyof InternshipProgram, label: 'Department' },
    { key: 'status' as keyof InternshipProgram, label: 'Status' },
    {
      key: 'applicationDeadline' as keyof InternshipProgram,
      label: 'Deadline',
      render: (value: string | number) => typeof value === 'string' ? new Date(value).toLocaleDateString() : '',
    },
    {
      key: 'maxPositions' as keyof InternshipProgram,
      label: 'Positions',
    },
  ];

  return (
    <EntityManager
      title="Internship Programs"
      entities={programs}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={InternshipProgramForm}
    />
  );
}; 