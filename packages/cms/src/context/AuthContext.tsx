import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  switchRole: (role: 'ccm_admin' | 'editor' | 'checker') => void;
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: Record<string, User> = {
  'admin@ncrst.na': {
    id: '1',
    name: 'CCM Administrator',
    email: 'admin@ncrst.na',
    role: 'ccm_admin',
    department: 'CCM',
    status: 'active',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-15',
    canChangePassword: true
  },
  'oceo.editor1@ncrst.na': {
    id: '2',
    name: 'John Smith',
    email: 'oceo.editor1@ncrst.na',
    role: 'editor',
    department: 'OCEO',
    status: 'active',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-14',
    canChangePassword: true
  },
  'marketing.editor1@ncrst.na': {
    id: '3',
    name: 'Sarah Johnson',
    email: 'marketing.editor1@ncrst.na',
    role: 'editor',
    department: 'Marketing',
    status: 'active',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-13',
    canChangePassword: true
  },
  'checker@ncrst.na': {
    id: '4',
    name: 'Content Checker',
    email: 'checker@ncrst.na',
    role: 'checker',
    department: 'Content Review',
    status: 'active',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-15',
    canChangePassword: true
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const foundUser = mockUsers[email];
    if (foundUser && password === 'password') {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: 'ccm_admin' | 'editor' | 'checker') => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    // Mock password change - in real app, this would call backend
    if (currentPassword === 'password' && newPassword.length >= 6) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}