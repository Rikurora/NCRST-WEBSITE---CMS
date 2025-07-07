import React, { useState, useEffect } from 'react';
import { EntityManager } from '../../components/common/EntityManager';
import { ScienceEvent } from '@ncrst/shared';
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

interface ScienceEventFormProps {
  entity?: ScienceEvent;
  onSubmit: (data: Partial<ScienceEvent>) => Promise<void>;
  onCancel: () => void;
}

const ScienceEventForm: React.FC<ScienceEventFormProps> = ({
  entity,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<ScienceEvent>>(
    entity || {
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      location: '',
      type: 'conference',
      status: 'upcoming',
      registrationLink: '',
      maxAttendees: 0,
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
          <FormLabel>Event Type</FormLabel>
          <Select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
          >
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="exhibition">Exhibition</option>
            <option value="competition">Competition</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            value={formData.date?.split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="Event venue or online platform"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value as ScienceEvent['status'] })
            }
          >
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Registration Link</FormLabel>
          <Input
            type="url"
            value={formData.registrationLink}
            onChange={(e) =>
              setFormData({ ...formData, registrationLink: e.target.value })
            }
            placeholder="https://example.com/register"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Maximum Attendees</FormLabel>
          <NumberInput
            value={formData.maxAttendees}
            onChange={(value) =>
              setFormData({ ...formData, maxAttendees: parseInt(value) || 0 })
            }
            min={0}
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

export const ScienceEventsPage: React.FC = () => {
  const [events, setEvents] = useState<ScienceEvent[]>([]);
  const toast = useToast();

  useEffect(() => {
    // Fetch events from API
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/science-events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        toast({
          title: 'Failed to fetch events',
          description: error instanceof Error ? error.message : 'Unknown error',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchEvents();
  }, [toast]);

  const handleAdd = async (data: Partial<ScienceEvent>) => {
    try {
      const response = await fetch('/api/science-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newEvent = await response.json();
      setEvents([...events, newEvent]);
    } catch (error) {
      console.error('Failed to create event:', error);
      throw new Error('Failed to create event');
    }
  };

  const handleEdit = async (data: Partial<ScienceEvent>) => {
    try {
      const response = await fetch(`/api/science-events/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedEvent = await response.json();
      setEvents(
        events.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    } catch (error) {
      console.error('Failed to update event:', error);
      throw new Error('Failed to update event');
    }
  };

  const handleDelete = async (event: ScienceEvent) => {
    try {
      await fetch(`/api/science-events/${event.id}`, {
        method: 'DELETE',
      });
      setEvents(events.filter((e) => e.id !== event.id));
    } catch (error) {
      console.error('Failed to delete event:', error);
      throw new Error('Failed to delete event');
    }
  };

  const columns = [
    { key: 'title' as keyof ScienceEvent, label: 'Title' },
    { key: 'type' as keyof ScienceEvent, label: 'Type' },
    { key: 'location' as keyof ScienceEvent, label: 'Location' },
    { key: 'status' as keyof ScienceEvent, label: 'Status' },
    {
      key: 'date' as keyof ScienceEvent,
      label: 'Date',
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
      title="Science Events"
      entities={events}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      EntityForm={ScienceEventForm}
    />
  );
}; 