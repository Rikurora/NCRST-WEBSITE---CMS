import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiFile, FiHome } from 'react-icons/fi';

interface NavItemProps {
  icon: React.ElementType;
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ icon, to, children }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue('blue.50', 'blue.900'),
          color: useColorModeValue('blue.600', 'blue.200'),
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export const Navigation: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          NCRST CMS
        </Text>
      </Flex>
      <Stack spacing={0}>
        <NavItem icon={FiHome} to="/">
          Dashboard
        </NavItem>
        <NavItem icon={FiFile} to="/documents">
          Documents
        </NavItem>
      </Stack>
    </Box>
  );
}; 