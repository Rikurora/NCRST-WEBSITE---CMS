import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Header } from '../components/common/Header';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { EditorDashboard } from '../components/editor/EditorDashboard';
import { CheckerDashboard } from '../components/checker/CheckerDashboard';

export function Dashboard() {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'ccm_admin':
        return <AdminDashboard />;
      case 'editor':
        return <EditorDashboard />;
      case 'checker':
        return <CheckerDashboard />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
              <p className="text-gray-600">You don't have permission to access this dashboard.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {renderDashboard()}
    </div>
  );
}