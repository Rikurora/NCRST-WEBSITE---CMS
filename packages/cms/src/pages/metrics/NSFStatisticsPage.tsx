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
  Select,
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import type { INsfStatistic } from '@ncrst/shared';
import { apiService } from '@ncrst/shared';

interface NSFStatisticFormData extends Omit<INsfStatistic, 'id' | 'created_at'> {
  statistic_name: string;
  value: string;
  description: string;
  year: number;
  chart_type: string;
  chart_data: string;
  is_active: boolean;
  display_order: number;
}

const chartTypes = [
  'bar',
  'line',
  'pie',
  'doughnut',
  'area',
  'radar',
  'scatter',
  'bubble',
];

const NSFStatisticsPage: React.FC = () => {
  const [statistics, setStatistics] = useState<INsfStatistic[]>([]);
  const [selectedStatistic, setSelectedStatistic] = useState<INsfStatistic | null>(null);
  const [formData, setFormData] = useState<NSFStatisticFormData>({
    statistic_name: '',
    value: '',
    description: '',
    year: new Date().getFullYear(),
    chart_type: 'bar',
    chart_data: '',
    is_active: true,
    display_order: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const data = await apiService.getAll<INsfStatistic>('/nsf-statistics');
      setStatistics(data);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: 'Error fetching statistics',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleEdit = (statistic: INsfStatistic) => {
    setSelectedStatistic(statistic);
    setFormData({
      statistic_name: statistic.statistic_name,
      value: statistic.value,
      description: statistic.description || '',
      year: statistic.year,
      chart_type: statistic.chart_type || 'bar',
      chart_data: statistic.chart_data || '',
      is_active: statistic.is_active,
      display_order: statistic.display_order || 0,
    });
    onOpen();
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this statistic?')) return;

    try {
      await apiService.delete('/nsf-statistics', id);
      toast({
        title: 'Success',
        description: 'NSF statistic deleted successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      fetchStatistics();
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
      if (selectedStatistic) {
        await apiService.update<INsfStatistic>('/nsf-statistics', selectedStatistic.id, formData);
      } else {
        await apiService.create<INsfStatistic>('/nsf-statistics', formData);
      }

      toast({
        title: 'Success',
        description: `NSF statistic ${selectedStatistic ? 'updated' : 'created'} successfully`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      onClose();
      fetchStatistics();
      setSelectedStatistic(null);
      setFormData({
        statistic_name: '',
        value: '',
        description: '',
        year: new Date().getFullYear(),
        chart_type: 'bar',
        chart_data: '',
        is_active: true,
        display_order: 0,
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: 'Error',
        description: `Failed to ${selectedStatistic ? 'update' : 'create'} NSF statistic: ${errorMessage}`,
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
          <Heading size="lg">NSF Statistics</Heading>
          <Button leftIcon={<FiPlus />} colorScheme="blue" onClick={() => {
            setSelectedStatistic(null);
            setFormData({
              statistic_name: '',
              value: '',
              description: '',
              year: new Date().getFullYear(),
              chart_type: 'bar',
              chart_data: '',
              is_active: true,
              display_order: 0,
            });
            onOpen();
          }}>
            Add New Statistic
          </Button>
        </HStack>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th>Description</Th>
            <Th>Year</Th>
            <Th>Chart Type</Th>
            <Th>Status</Th>
            <Th>Order</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {statistics.map((statistic) => (
            <Tr key={statistic.id}>
              <Td>{statistic.statistic_name}</Td>
              <Td>{statistic.value}</Td>
              <Td>{statistic.description}</Td>
              <Td>{statistic.year}</Td>
              <Td>{statistic.chart_type}</Td>
              <Td>{statistic.is_active ? 'Active' : 'Inactive'}</Td>
              <Td>{statistic.display_order}</Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton
                    aria-label="Edit statistic"
                    icon={<FiEdit2 />}
                    size="sm"
                    onClick={() => handleEdit(statistic)}
                  />
                  <IconButton
                    aria-label="Delete statistic"
                    icon={<FiTrash2 />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDelete(statistic.id)}
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
              {selectedStatistic ? 'Edit NSF Statistic' : 'Add New NSF Statistic'}
            </ModalHeader>
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input
                  name="statistic_name"
                  value={formData.statistic_name}
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
                <FormLabel>Year</FormLabel>
                <NumberInput
                  value={formData.year}
                  onChange={(value) => handleNumberChange('year', value)}
                  min={2000}
                  max={2100}
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Chart Type</FormLabel>
                <Select
                  name="chart_type"
                  value={formData.chart_type}
                  onChange={handleInputChange}
                >
                  {chartTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Chart Data (JSON)</FormLabel>
                <Textarea
                  name="chart_data"
                  value={formData.chart_data}
                  onChange={handleInputChange}
                  placeholder="Enter chart data in JSON format"
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
                {selectedStatistic ? 'Update' : 'Create'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default NSFStatisticsPage; 