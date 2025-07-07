import React, { useState } from 'react';
import { FiUsers, FiCheckSquare, FiHome, FiBarChart2, FiShield, FiSettings } from 'react-icons/fi';
import { Card } from '../common/Card';
import { Sidebar, SidebarProps } from '../common/Sidebar';
import { UserManagement } from './UserManagement';
import { Departments } from './Departments';
import { PendingChanges } from './PendingChanges';
import { useContent } from '../../context/ContentContext';
import { navigation } from '../../config/navigation';

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState('dashboard');
  const { changes, users, departments } = useContent();

  const pendingChanges = changes.filter(change => change.status === 'pending_approval').length;
  const activeUsers = users.filter(user => user.status === 'active').length;
  const activeDepartments = departments.filter(dept => dept.status === 'active').length;

  const renderContent = () => {
    switch (currentView) {
      case 'users':
        return <UserManagement />;
      case 'departments':
        return <Departments />;
      case 'pending-changes':
        return <PendingChanges />;
      case 'profile':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-600">Profile management coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-600">System settings coming soon...</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#777675] mb-2">CCM Admin Dashboard</h2>
              <p className="text-gray-600">Manage users, departments, and approve content changes</p>
              <div className="text-sm text-gray-500 mt-2">
                {pendingChanges} changes awaiting approval
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card
                title="User Management"
                description="Add, edit, and manage user accounts and permissions"
                icon={FiUsers}
                onClick={() => setCurrentView('users')}
                badge={activeUsers.toString()}
                variant="gold"
              />
              
              <Card
                title="Pending Changes"
                description="Review and approve content changes from departments"
                icon={FiCheckSquare}
                onClick={() => setCurrentView('pending-changes')}
                badge={pendingChanges > 0 ? pendingChanges.toString() : undefined}
                variant="grey"
              />
              
              <Card
                title="Department Management"
                description="Configure departments and organizational structure"
                icon={FiHome}
                onClick={() => setCurrentView('departments')}
                badge={activeDepartments.toString()}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card
                title="System Analytics"
                description="View system usage and performance metrics"
                icon={FiBarChart2}
              >
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{users.length}</div>
                    <div className="text-sm text-gray-600">Total Users</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{changes.length}</div>
                    <div className="text-sm text-gray-600">Total Changes</div>
                  </div>
                </div>
              </Card>

              <Card
                title="Security & Permissions"
                description="Manage access controls and security settings"
                icon={FiShield}
              >
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Sessions</span>
                    <span className="font-medium">{activeUsers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Failed Logins (24h)</span>
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Security Score</span>
                    <span className="font-medium text-green-600">High</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        navigation={navigation}
      />
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}