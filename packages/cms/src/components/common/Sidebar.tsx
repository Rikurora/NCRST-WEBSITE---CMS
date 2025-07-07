import React from 'react';
import { Box, VStack, Text, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../../config/navigation';

export interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  navigation: readonly NavItem[];
}

interface SidebarItemProps {
  item: NavItem;
  depth?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, depth = 0 }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const padding = `${depth * 4}px`;

  return (
    <>
      <ChakraLink
        as={Link}
        to={item.path}
        display="flex"
        alignItems="center"
        p={2}
        pl={padding}
        rounded="md"
        bg={isActive ? 'blue.100' : 'transparent'}
        _hover={{
          bg: isActive ? 'blue.100' : 'gray.100',
          textDecoration: 'none',
        }}
      >
        <Icon as={item.icon} mr={2} />
        <Text>{item.label}</Text>
      </ChakraLink>
      {item.children && (
        <VStack align="stretch" spacing={1} ml={4}>
          {item.children.map((child) => (
            <SidebarItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </VStack>
      )}
    </>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, navigation }) => {
  return (
    <Box
      as="nav"
      pos="sticky"
      top={0}
      w="250px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      p={4}
      overflowY="auto"
    >
      <VStack align="stretch" spacing={2}>
        {navigation.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </VStack>
    </Box>
  );
};