import React, { useState } from 'react';
import { FiFileText, FiList, FiBarChart2, FiClock } from 'react-icons/fi';
import { Card } from '../common/Card';
import { Sidebar } from '../common/Sidebar';
import { ReviewChanges } from './ReviewChanges';
import { AllChanges } from './AllChanges';
import { useContent } from '../../context/ContentContext';
import { navigation } from '../../config/navigation';
import type { NavItem } from '../../config/navigation';

export function CheckerDashboard() {
  const [currentView, setCurrentView] = useState('dashboard');
  const { changes } = useContent();

  const pendingReviews = changes.filter(change => change.status === 'pending_review').length;
  const forwardedChanges = changes.filter(change => change.status === 'pending_approval').length;
  const totalReviewed = changes.filter(change => change.status === 'reviewed' || change.status === 'pending_approval').length;

  const checkerNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: FiBarChart2, path: '/dashboard' },
    { id: 'review', label: 'Review Changes', icon: FiFileText, path: '/review' },
    { id: 'all-changes', label: 'All Changes', icon: FiList, path: '/all-changes' }
  ] as const;

  const renderContent = () => {
    switch (currentView) {
      case 'review':
        return <ReviewChanges />;
      case 'all-changes':
        return <AllChanges />;
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
              <h2 className="text-3xl font-bold text-[#777675] mb-2">Checker Dashboard</h2>
              <p className="text-gray-600">Review and forward content changes from all departments</p>
              <div className="text-sm text-gray-500 mt-2">
                {pendingReviews} changes awaiting your review
              </div>
            </div>

            {/* Status Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-orange-600">{pendingReviews}</div>
                <div className="text-sm text-gray-600">Pending Review</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-[#ffd332]">{forwardedChanges}</div>
                <div className="text-sm text-gray-600">Forwarded</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-2xl font-bold text-green-600">{totalReviewed}</div>
                <div className="text-sm text-gray-600">Total Reviewed</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card
                title="Review Changes"
                description="Review content changes submitted by editors"
                icon={FiFileText}
                onClick={() => setCurrentView('review')}
                badge={pendingReviews > 0 ? pendingReviews.toString() : undefined}
                variant="gold"
              />
              
              <Card
                title="All Changes"
                description="View all departmental changes and their status"
                icon={FiList}
                onClick={() => setCurrentView('all-changes')}
                badge={changes.length.toString()}
                variant="grey"
              />
              
              <Card
                title="Review Statistics"
                description="Overview of your review activity"
                icon={FiBarChart2}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card
                title="Review Activity"
                description="Your review statistics"
                icon={FiBarChart2}
              >
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{pendingReviews}</div>
                    <div className="text-sm text-gray-600">Pending Reviews</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{totalReviewed}</div>
                    <div className="text-sm text-gray-600">Reviewed</div>
                  </div>
                </div>
              </Card>

              <Card
                title="Recent Submissions"
                description="Latest content submissions from departments"
                icon={FiClock}
              >
                <div className="mt-4 space-y-2">
                  {changes.slice(0, 3).map((change) => (
                    <div key={change.id} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate">{change.title}</span>
                      <span className={`font-medium ${
                        change.status === 'pending_review' ? 'text-orange-600' :
                        change.status === 'pending_approval' ? 'text-[#ffd332]' :
                        change.status === 'approved' ? 'text-green-600' :
                        'text-red-600'
                      }`}>
                        {change.status === 'pending_review' ? 'Review' :
                         change.status === 'pending_approval' ? 'Approval' :
                         change.status}
                      </span>
                    </div>
                  ))}
                  {changes.length === 0 && (
                    <div className="text-sm text-gray-500">No recent submissions</div>
                  )}
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
        navigation={checkerNavigation}
      />
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}