import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import type { ProcurementBid } from '@ncrst/shared';
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

interface ProcurementBidFormProps {
  entity?: ProcurementBid;
  onSubmit: (data: Partial<ProcurementBid>) => Promise<void>;
  onCancel: () => void;
}

const ProcurementBidForm: React.FC<ProcurementBidFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<ProcurementBid>>(
    entity || {
      title: '',
      description: '',
      referenceNumber: '',
      status: 'open',
      submissionDeadline: new Date().toISOString().split('T')[0],
      estimatedBudget: 0,
      requirements: '',
      contactPerson: '',
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
          <FormLabel>Title</FormLabel>
          <Input
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Reference Number</FormLabel>
          <Input
            value={formData.referenceNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, referenceNumber: e.target.value })
            }
            placeholder="BID-2024-001"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, description: e.target.value })
            }
            minHeight="150px"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            value={formData.status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFormData({ ...formData, status: e.target.value as ProcurementBid['status'] })
            }
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="awarded">Awarded</option>
            <option value="cancelled">Cancelled</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Submission Deadline</FormLabel>
          <Input
            type="date"
            value={formData.submissionDeadline?.split('T')[0]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, submissionDeadline: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Estimated Budget (NAD)</FormLabel>
          <NumberInput
            value={formData.estimatedBudget}
            onChange={(value: string) =>
              setFormData({ ...formData, estimatedBudget: parseFloat(value) })
            }
            min={0}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Requirements</FormLabel>
          <Textarea
            value={formData.requirements}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, requirements: e.target.value })
            }
            minHeight="150px"
            placeholder="List all requirements and qualifications needed"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Contact Person</FormLabel>
          <Input
            value={formData.contactPerson}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, contactPerson: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Contact Email</FormLabel>
          <Input
            type="email"
            value={formData.contactEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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

export const ProcurementBidsPage: React.FC = () => {
  const [bids, setBids] = useState<ProcurementBid[]>([]);

  useEffect(() => {
    // Fetch bids from API
    const fetchBids = async () => {
      try {
        const response = await fetch('/api/procurement-bids');
        const data = await response.json();
        setBids(data);
      } catch (error) {
        console.error('Failed to fetch bids:', error);
      }
    };
    fetchBids();
  }, []);

  const handleAdd = async (data: Partial<ProcurementBid>) => {
    try {
      const response = await fetch('/api/procurement-bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newBid = await response.json();
      setBids([...bids, newBid]);
    } catch (error) {
      console.error('Failed to create bid:', error);
      throw new Error('Failed to create bid');
    }
  };

  const handleEdit = async (data: Partial<ProcurementBid>) => {
    try {
      const response = await fetch(`/api/procurement-bids/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedBid = await response.json();
      setBids(
        bids.map((bid) =>
          bid.id === updatedBid.id ? updatedBid : bid
        )
      );
    } catch (error) {
      console.error('Failed to update bid:', error);
      throw new Error('Failed to update bid');
    }
  };

  const handleDelete = async (bid: ProcurementBid) => {
    try {
      await fetch(`/api/procurement-bids/${bid.id}`, {
        method: 'DELETE',
      });
      setBids(bids.filter((b) => b.id !== bid.id));
    } catch (error) {
      console.error('Failed to delete bid:', error);
      throw new Error('Failed to delete bid');
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NA', {
      style: 'currency',
      currency: 'NAD',
    }).format(amount);
  };

  const columns = [
    { key: 'referenceNumber' as keyof ProcurementBid, label: 'Reference' },
    { key: 'title' as keyof ProcurementBid, label: 'Title' },
    { key: 'status' as keyof ProcurementBid, label: 'Status' },
    {
      key: 'submissionDeadline' as keyof ProcurementBid,
      label: 'Deadline',
      render: (value: string | number | null) => value ? new Date(String(value)).toLocaleDateString() : '',
    },
    {
      key: 'estimatedBudget' as keyof ProcurementBid,
      label: 'Budget',
      render: (value: string | number | null) => {
        if (value === null) return '';
        return formatCurrency(Number(value));
      },
    },
  ];

  return (
    <EntityManager
      title="Procurement Bids"
      entities={bids}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={ProcurementBidForm}
    />
  );
}; 