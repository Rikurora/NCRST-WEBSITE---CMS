import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
  IconButton,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Switch,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import type { IImpactMetric } from '@ncrst/shared';
import { apiService } from '@ncrst/shared';

interface ImpactMetricFormData extends Omit<IImpactMetric, 'id' | 'created_at'> {
  title: string;
  value: string;
  description: string;
  icon: string;
  is_active: boolean;
  display_order: number;
}

const ImpactMetricsPage: React.FC = () => {
  const [metrics, setMetrics] = useState<IImpactMetric[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<IImpactMetric | null>(null);
  const [formData, setFormData] = useState<ImpactMetricFormData>({
    title: '',
    value: '',
    description: '',
    icon: '',
    is_active: true,
    display_order: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const data = await apiService.getAll<IImpactMetric>('/impact-metrics');
      setMetrics(data);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: 'Error fetching metrics',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleNumberChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleEdit = (metric: IImpactMetric) => {
    setSelectedMetric(metric);
    setFormData({
      title: metric.title,
      value: metric.value,
      description: metric.description || '',
      icon: metric.icon || '',
      is_active: metric.is_active,
      display_order: metric.display_order || 0,
    });
    onOpen();
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this metric?')) return;

    try {
      await apiService.delete('/impact-metrics', id);
      toast({
        title: 'Success',
        description: 'Impact metric deleted successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      fetchMetrics();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (selectedMetric) {
        await apiService.update<IImpactMetric>('/impact-metrics', selectedMetric.id, formData);
      } else {
        await apiService.create<IImpactMetric>('/impact-metrics', formData);
      }

      toast({
        title: 'Success',
        description: `Impact metric ${selectedMetric ? 'updated' : 'created'} successfully`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      onClose();
      fetchMetrics();
      setSelectedMetric(null);
      setFormData({
        title: '',
        value: '',
        description: '',
        icon: '',
        is_active: true,
        display_order: 0,
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: 'Error',
        description: `Failed to ${selectedMetric ? 'update' : 'create'} impact metric: ${errorMessage}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={6}>
        <HStack justify="space-between" align="center">
          <Heading size="lg">Impact Metrics</Heading>
          <Button leftIcon={<FiPlus />} colorScheme="blue" onClick={() => {
            setSelectedMetric(null);
            setFormData({
              title: '',
              value: '',
              description: '',
              icon: '',
              is_active: true,
              display_order: 0,
            });
            onOpen();
          }}>
            Add New Metric
          </Button>
        </HStack>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Value</Th>
            <Th>Description</Th>
            <Th>Icon</Th>
            <Th>Status</Th>
            <Th>Order</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {metrics.map((metric) => (
            <Tr key={metric.id}>
              <Td>{metric.title}</Td>
              <Td>{metric.value}</Td>
              <Td>{metric.description}</Td>
              <Td>{metric.icon}</Td>
              <Td>{metric.is_active ? 'Active' : 'Inactive'}</Td>
              <Td>{metric.display_order}</Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton
                    aria-label="Edit metric"
                    icon={<FiEdit2 />}
                    size="sm"
                    onClick={() => handleEdit(metric)}
                  />
                  <IconButton
                    aria-label="Delete metric"
                    icon={<FiTrash2 />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDelete(metric.id)}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>
              {selectedMetric ? 'Edit Impact Metric' : 'Add New Impact Metric'}
            </ModalHeader>
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Value</FormLabel>
                <Input
                  name="value"
                  value={formData.value}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Icon</FormLabel>
                <Input
                  name="icon"
                  value={formData.icon}
                  onChange={handleInputChange}
                  placeholder="e.g., FiUsers, FiAward"
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Display Order</FormLabel>
                <NumberInput
                  value={formData.display_order}
                  onChange={(value) => handleNumberChange('display_order', value)}
                  min={0}
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>

              <FormControl display="flex" alignItems="center" mb={4}>
                <FormLabel mb={0}>Active</FormLabel>
                <Switch
                  name="is_active"
                  isChecked={formData.is_active}
                  onChange={handleSwitchChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                {selectedMetric ? 'Update' : 'Create'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ImpactMetricsPage; 