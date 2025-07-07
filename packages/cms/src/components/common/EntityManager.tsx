import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Text,
  useToast
} from '@chakra-ui/react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

interface EntityManagerProps<T> {
  title: string;
  entities: T[];
  columns: {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T]) => React.ReactNode;
  }[];
  onAdd: (data: Partial<T>) => Promise<void>;
  onEdit: (entity: T) => void;
  onDelete: (entity: T) => Promise<void>;
  EntityForm: React.ComponentType<{
    entity?: T;
    onSubmit: (data: Partial<T>) => Promise<void>;
    onCancel: () => void;
  }>;
}

export function EntityManager<T extends { id: number }>({
  title,
  entities,
  columns,
  onAdd,
  onEdit,
  onDelete,
  EntityForm
}: EntityManagerProps<T>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEntity, setSelectedEntity] = useState<T | undefined>();
  const toast = useToast();

  const handleAdd = () => {
    setSelectedEntity(undefined);
    onOpen();
  };

  const handleEdit = (entity: T) => {
    setSelectedEntity(entity);
    onOpen();
  };

  const handleDelete = async (entity: T) => {
    try {
      await onDelete(entity);
      toast({
        title: 'Success',
        description: 'Entity deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to delete entity:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete entity',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">{title}</Text>
        <Button leftIcon={<FiPlus />} colorScheme="blue" onClick={handleAdd}>
          Add New
        </Button>
      </HStack>

      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.key as string}>{column.label}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {entities.map((entity) => (
            <Tr key={entity.id}>
              {columns.map((column) => (
                <Td key={`${entity.id}-${column.key as string}`}>
                  {column.render
                    ? column.render(entity[column.key])
                    : String(entity[column.key])}
                </Td>
              ))}
              <Td>
                <HStack spacing={2}>
                  <Button
                    size="sm"
                    leftIcon={<FiEdit2 />}
                    onClick={() => handleEdit(entity)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    leftIcon={<FiTrash2 />}
                    colorScheme="red"
                    onClick={() => handleDelete(entity)}
                  >
                    Delete
                  </Button>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedEntity ? 'Edit Entity' : 'Add New Entity'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EntityForm
              entity={selectedEntity}
              onSubmit={async (data) => {
                try {
                  if (selectedEntity) {
                    await onEdit({ ...selectedEntity, ...data });
                  } else {
                    await onAdd(data);
                  }
                  onClose();
                  toast({
                    title: 'Success',
                    description: `Entity ${selectedEntity ? 'updated' : 'created'} successfully`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                } catch (error) {
                  console.error('Failed to save entity:', error);
                  toast({
                    title: 'Error',
                    description: `Failed to ${selectedEntity ? 'update' : 'create'} entity`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  });
                }
              }}
              onCancel={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
} 