import React, { useState } from 'react';
import { Edit, Trash2, Eye, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useContent } from '../../context/ContentContext';
import { useAuth } from '../../context/AuthContext';
import { Change } from '../../types';

interface ChangeActionModalProps {
  change: Change | null;
  isOpen: boolean;
  onClose: () => void;
}

function ChangeActionModal({ change, isOpen, onClose }: ChangeActionModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Change Details">
      <div className="max-w-2xl">
        {change && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#ffd332]/20 to-[#e6be2d]/20 border border-[#ffd332] rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">{change.title}</h4>
              <p className="text-gray-700 mb-4">{change.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Type:</span>
                  <span className="ml-2 capitalize">{change.type}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Department:</span>
                  <span className="ml-2">{change.department}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Created:</span>
                  <span className="ml-2">{new Date(change.createdAt).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Status:</span>
                  <span className={`ml-2 font-medium ${
                    change.status === 'approved' ? 'text-green-600' :
                    change.status === 'sent_back' ? 'text-red-600' :
                    'text-[#ffd332]'
                  }`}>
                    {change.status === 'pending_review' ? 'Pending Review' :
                     change.status === 'pending_approval' ? 'Pending Approval' :
                     change.status === 'sent_back' ? 'Sent Back for Amendment' :
                     change.status}
                  </span>
                </div>
              </div>
            </div>

            {change.checkerNotes && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <div className="font-medium text-blue-900 text-sm">Checker Notes:</div>
                <div className="text-blue-800 text-sm mt-1">{change.checkerNotes}</div>
              </div>
            )}

            {change.rejectionReason && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <div className="font-medium text-red-900 text-sm">Feedback for Amendment:</div>
                <div className="text-red-800 text-sm mt-1">{change.rejectionReason}</div>
              </div>
            )}

            {change.reviewedBy && (
              <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                <div className="text-sm text-gray-600">
                  <strong>Reviewed by:</strong> {change.reviewedBy}
                  {change.reviewedAt && (
                    <span className="ml-2">on {new Date(change.reviewedAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            )}

            {change.approvedBy && (
              <div className="bg-green-50 border border-green-200 rounded-md p-3">
                <div className="text-sm text-green-800">
                  <strong>Approved by:</strong> {change.approvedBy}
                  {change.approvedAt && (
                    <span className="ml-2">on {new Date(change.approvedAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

export function MyChanges() {
  const { changes } = useContent();
  const { user } = useAuth();
  const [selectedChange, setSelectedChange] = useState<Change | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter changes for current user only
  const myChanges = changes.filter(change => change.author === user?.name);
  const filteredChanges = myChanges.filter(change => 
    statusFilter === 'all' || change.status === statusFilter
  );

  const handleChangeAction = (change: Change) => {
    setSelectedChange(change);
    setIsActionModalOpen(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'sent_back':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'pending_approval':
        return <Clock className="h-5 w-5 text-[#ffd332]" />;
      case 'pending_review':
        return <AlertCircle className="h-5 w-5 text-orange-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const statusCounts = {
    all: myChanges.length,
    pending_review: myChanges.filter(c => c.status === 'pending_review').length,
    pending_approval: myChanges.filter(c => c.status === 'pending_approval').length,
    approved: myChanges.filter(c => c.status === 'approved').length,
    sent_back: myChanges.filter(c => c.status === 'sent_back').length
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#777675] mb-2">My Changes</h2>
        <p className="text-gray-600">Track the status of your content submissions</p>
        <div className="text-sm text-gray-500 mt-2">
          Department: {user?.department} • {statusCounts.all} total changes
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-gray-600">{statusCounts.all}</div>
          <div className="text-sm text-gray-600">Total Changes</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-orange-600">{statusCounts.pending_review}</div>
          <div className="text-sm text-gray-600">Pending Review</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-[#ffd332]">{statusCounts.pending_approval}</div>
          <div className="text-sm text-gray-600">Pending Approval</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">{statusCounts.approved}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-red-600">{statusCounts.sent_back}</div>
          <div className="text-sm text-gray-600">Sent Back</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-[#ffd332]/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">All Changes ({filteredChanges.length})</h3>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            >
              <option value="all">All Status</option>
              <option value="pending_review">Pending Review</option>
              <option value="pending_approval">Pending Approval</option>
              <option value="approved">Approved</option>
              <option value="sent_back">Sent Back</option>
            </select>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredChanges.map((change) => (
            <div key={change.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(change.status)}
                    <h4 className="text-lg font-bold text-gray-900">{change.title}</h4>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        change.status === 'approved' ? 'bg-green-100 text-green-800' :
                        change.status === 'sent_back' ? 'bg-red-100 text-red-800' :
                        change.status === 'pending_approval' ? 'bg-[#ffd332]/20 text-[#777675]' :
                        change.status === 'pending_review' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {change.status === 'pending_review' ? 'Pending Review' :
                       change.status === 'pending_approval' ? 'Pending Approval' :
                       change.status === 'sent_back' ? 'Sent Back' :
                       change.status}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      change.type === 'create' ? 'bg-green-100 text-green-800' :
                      change.type === 'update' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {change.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{change.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span><strong>Department:</strong> {change.department}</span>
                    <span><strong>Created:</strong> {new Date(change.createdAt).toLocaleDateString()}</span>
                    {change.reviewedBy && (
                      <span><strong>Reviewed by:</strong> {change.reviewedBy}</span>
                    )}
                  </div>

                  {change.rejectionReason && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                      <div className="font-medium text-red-900 text-sm">Needs Amendment:</div>
                      <div className="text-red-800 text-sm mt-1">{change.rejectionReason}</div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleChangeAction(change)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredChanges.length === 0 && (
            <div className="p-12 text-center">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No changes found</h3>
              <p className="text-gray-600">
                {statusFilter === 'all' 
                  ? 'Start creating content to see your changes here.' 
                  : `No changes with status "${statusFilter.replace('_', ' ')}".`}
              </p>
            </div>
          )}
        </div>
      </div>

      <ChangeActionModal
        change={selectedChange}
        isOpen={isActionModalOpen}
        onClose={() => {
          setIsActionModalOpen(false);
          setSelectedChange(null);
        }}
      />
    </div>
  );
}