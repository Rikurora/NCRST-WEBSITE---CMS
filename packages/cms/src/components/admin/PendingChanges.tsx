import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock, Search } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useContent } from '../../context/ContentContext';
import { useAuth } from '../../context/AuthContext';
import { Change } from '../../types';

interface ApprovalModalProps {
  change: Change | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (changeId: string, approved: boolean, reason: string, approvedBy: string) => void;
}

function ApprovalModal({ change, isOpen, onClose, onApprove }: ApprovalModalProps) {
  const { user } = useAuth();
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);

  const handleApprove = () => {
    if (change && user) {
      onApprove(change.id, true, '', user.name);
      onClose();
    }
  };

  const handleReject = () => {
    if (change && user && rejectionReason.trim()) {
      onApprove(change.id, false, rejectionReason, user.name);
      setRejectionReason('');
      setShowRejectForm(false);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Review Change" size="xl">
      {change && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#ffd332]/20 to-[#e6be2d]/20 border border-[#ffd332] rounded-lg p-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">{change.title}</h4>
            <p className="text-gray-700 mb-4">{change.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 font-medium">Author:</span>
                <span className="ml-2">{change.author}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Department:</span>
                <span className="ml-2">{change.department}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Type:</span>
                <span className="ml-2 capitalize">{change.type}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Created:</span>
                <span className="ml-2">{new Date(change.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            {change.checkerNotes && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <div className="font-medium text-blue-900 text-sm">Checker Notes:</div>
                <div className="text-blue-800 text-sm mt-1">{change.checkerNotes}</div>
              </div>
            )}
          </div>
          
          {!showRejectForm ? (
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowRejectForm(true)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                <XCircle className="h-4 w-4" />
                <span>Send Back for Amendment</span>
              </button>
              <button
                onClick={handleApprove}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Approve</span>
              </button>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="text-sm font-medium text-red-800 mb-3">Reason for Amendment</h5>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Please provide specific feedback for the editor to make amendments..."
                rows={4}
                className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <div className="flex justify-end space-x-3 mt-3">
                <button
                  onClick={() => {
                    setShowRejectForm(false);
                    setRejectionReason('');
                  }}
                  className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  disabled={!rejectionReason.trim()}
                  className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:bg-red-300"
                >
                  Send Back for Amendment
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

export function PendingChanges() {
  const { changes, approveChange } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChange, setSelectedChange] = useState<Change | null>(null);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('pending_approval');

  const filteredChanges = changes.filter(change => {
    const matchesSearch = change.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         change.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         change.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || change.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleReviewChange = (change: Change) => {
    setSelectedChange(change);
    setIsApprovalModalOpen(true);
  };

  const statusCounts = {
    pending_approval: changes.filter(c => c.status === 'pending_approval').length,
    approved: changes.filter(c => c.status === 'approved').length,
    sent_back: changes.filter(c => c.status === 'sent_back').length,
    total: changes.length
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#777675] mb-2">Pending Changes</h2>
        <p className="text-gray-600">Review and approve content changes from departments</p>
        <div className="text-sm text-gray-500 mt-2">
          {statusCounts.pending_approval} changes awaiting approval
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border-2 border-[#ffd332] p-4">
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
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-gray-600">{statusCounts.total}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-[#ffd332]/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Changes ({filteredChanges.length})</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search changes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              >
                <option value="pending_approval">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="sent_back">Sent Back</option>
                <option value="all">All Status</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredChanges.map((change) => (
            <div key={change.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{change.title}</h4>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${
                      change.type === 'update' ? 'bg-blue-100 text-blue-800' :
                      change.type === 'create' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {change.type}
                    </span>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      change.status === 'pending_approval' ? 'bg-[#ffd332]/20 text-[#777675]' :
                      change.status === 'approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {change.status === 'pending_approval' ? 'Pending Approval' :
                       change.status === 'sent_back' ? 'Sent Back' : 'Approved'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{change.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span><strong>Editor:</strong> {change.author}</span>
                    <span><strong>Department:</strong> {change.department}</span>
                    <span><strong>Created:</strong> {new Date(change.createdAt).toLocaleDateString()}</span>
                    {change.reviewedBy && (
                      <span><strong>Reviewed by:</strong> {change.reviewedBy}</span>
                    )}
                  </div>

                  {change.checkerNotes && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                      <div className="font-medium text-blue-900 text-sm">Checker Notes:</div>
                      <div className="text-blue-800 text-sm mt-1">{change.checkerNotes}</div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {change.status === 'pending_approval' && (
                    <button
                      onClick={() => handleReviewChange(change)}
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
                    >
                      <Clock className="h-4 w-4" />
                      <span>Review</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {filteredChanges.length === 0 && (
            <div className="p-12 text-center">
              <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No changes found</h3>
              <p className="text-gray-600">
                {statusFilter === 'pending_approval' 
                  ? 'All changes have been reviewed.' 
                  : 'Try adjusting your search or filter criteria.'}
              </p>
            </div>
          )}
        </div>
      </div>

      <ApprovalModal
        change={selectedChange}
        isOpen={isApprovalModalOpen}
        onClose={() => {
          setIsApprovalModalOpen(false);
          setSelectedChange(null);
        }}
        onApprove={approveChange}
      />
    </div>
  );
}