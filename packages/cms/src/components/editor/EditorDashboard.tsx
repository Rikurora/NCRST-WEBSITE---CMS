import React, { useState } from 'react';
import { FiFileText, FiEdit, FiPlus, FiClock, FiCheckCircle, FiUser } from 'react-icons/fi';
import { Card } from '../common/Card';
import { Sidebar } from '../common/Sidebar';
import { ContentManagement } from './ContentManagement';
import { MyChanges } from './MyChanges';
import { useContent } from '../../context/ContentContext';
import { useAuth } from '../../context/AuthContext';
import { navigation } from '../../config/navigation';

export function EditorDashboard() {
  const [currentView, setCurrentView] = useState('dashboard');
  const { content, changes } = useContent();
  const { user } = useAuth();

  // Filter content and changes for current user's department only
  const myContent = content.filter(item => item.department === user?.department);
  const myChanges = changes.filter(change => change.department === user?.department && change.author === user?.name);
  const pendingChanges = myChanges.filter(change => change.status === 'pending_review' || change.status === 'pending_approval').length;
  const approvedChanges = myChanges.filter(change => change.status === 'approved').length;
  const rejectedChanges = myChanges.filter(change => change.status === 'sent_back').length;

  const editorNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: FiUser, path: '/dashboard' },
    { id: 'content', label: 'Content', icon: FiFileText, path: '/content' },
    { id: 'changes', label: 'My Changes', icon: FiEdit, path: '/changes' }
  ] as const;

  const renderContent = () => {
    switch (currentView) {
      case 'content':
        return <ContentManagement />;
      case 'changes':
        return <MyChanges />;
      case 'profile':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#777675] mb-4">Profile</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-600">Profile management coming soon...</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#777675] mb-2">Editor Dashboard</h2>
              <p className="text-gray-600">Create and manage content for {user?.department} department</p>
              <div className="text-sm text-gray-500 mt-2">
                Department: {user?.department} • {pendingChanges} changes pending
              </div>
            </div>

            {/* Status Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-gray-600">{myChanges.length}</div>
                <div className="text-sm text-gray-600">Total Changes</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-[#ffd332]">{pendingChanges}</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-green-600">{approvedChanges}</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-red-600">{rejectedChanges}</div>
                <div className="text-sm text-gray-600">Rejected</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card
                title="Create Content"
                description={`Add new content to your ${user?.department} department`}
                icon={FiPlus}
                onClick={() => setCurrentView('content')}
                variant="gold"
              />
              
              <Card
                title="Edit Content"
                description="Manage and edit your existing content"
                icon={FiEdit}
                onClick={() => setCurrentView('content')}
                badge={myContent.length.toString()}
                variant="grey"
              />
              
              <Card
                title="My Changes"
                description="Track status of your content submissions"
                icon={FiFileText}
                onClick={() => setCurrentView('changes')}
                badge={pendingChanges > 0 ? pendingChanges.toString() : undefined}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Content Status"
                description="Overview of your content status"
                icon={FiCheckCircle}
              >
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{myContent.length}</div>
                    <div className="text-sm text-gray-600">Total Content</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{approvedChanges}</div>
                    <div className="text-sm text-gray-600">Approved</div>
                  </div>
                </div>
              </Card>

              <Card
                title="Recent Activity"
                description="Your latest content updates"
                icon={FiClock}
              >
                <div className="mt-4 space-y-2">
                  {myChanges.slice(0, 3).map((change) => (
                    <div key={change.id} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate">{change.title}</span>
                      <span className={`font-medium ${
                        change.status === 'approved' ? 'text-green-600' :
                        change.status === 'sent_back' ? 'text-red-600' :
                        'text-[#ffd332]'
                      }`}>
                        {change.status === 'pending_review' ? 'Review' :
                         change.status === 'pending_approval' ? 'Approval' :
                         change.status === 'sent_back' ? 'Sent Back' : 'Approved'}
                      </span>
                    </div>
                  ))}
                  {myChanges.length === 0 && (
                    <div className="text-sm text-gray-500">No recent activity</div>
                  )}
                </div>
              </Card>

              <Card
                title="Department Guidelines"
                description="Content creation guidelines"
                icon={FiFileText}
              >
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div>• Follow brand guidelines</div>
                  <div>• Submit for review before publishing</div>
                  <div>• Include relevant keywords</div>
                  <div>• Check spelling and grammar</div>
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
        navigation={editorNavigation}
      />
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}