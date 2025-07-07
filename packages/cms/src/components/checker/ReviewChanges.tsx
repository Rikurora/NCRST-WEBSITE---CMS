import React, { useState } from 'react';
import { CheckCircle, Search, Send } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useContent } from '../../context/ContentContext';
import { Change } from '../../types';

interface ReviewModalProps {
  change: Change | null;
  isOpen: boolean;
  onClose: () => void;
  onForward: (changeId: string, notes: string) => void;
}

function ReviewModal({ change, isOpen, onClose, onForward }: ReviewModalProps) {
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (change && notes.trim()) {
      onForward(change.id, notes);
      setNotes('');
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
          </div>
          
          <div className="bg-[#ffd332]/10 border border-[#ffd332] rounded-lg p-4">
            <h5 className="text-sm font-medium mb-3 text-[#777675]">
              Forward to CCM Admin
            </h5>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes for CCM Admin about this change..."
              rows={4}
              className="w-full px-3 py-2 border border-[#ffd332] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
            />
            <div className="flex justify-end space-x-3 mt-3">
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!notes.trim()}
                className="px-3 py-1 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829] disabled:opacity-50"
              >
                Forward to Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export function ReviewChanges() {
  const { changes, forwardToAdmin } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChange, setSelectedChange] = useState<Change | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const pendingChanges = changes.filter(change => change.status === 'pending_review');
  const filteredChanges = pendingChanges.filter(change => {
    const matchesSearch = change.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         change.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         change.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === 'all' || change.department === departmentFilter;
    
    return matchesSearch && matchesDepartment;
  });

  const handleReviewChange = (change: Change) => {
    setSelectedChange(change);
    setIsReviewModalOpen(true);
  };

  const departments = [...new Set(changes.map(c => c.department))];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#777675] mb-2">Review Changes</h2>
        <p className="text-gray-600">Review content changes submitted by editors from all departments</p>
        <div className="text-sm text-gray-500 mt-2">
          {pendingChanges.length} changes awaiting your review
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-[#ffd332]/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Pending Reviews ({filteredChanges.length})</h3>
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
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
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
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">
                      Pending Review
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{change.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span><strong>Editor:</strong> {change.author}</span>
                    <span><strong>Department:</strong> {change.department}</span>
                    <span><strong>Created:</strong> {new Date(change.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleReviewChange(change)}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Forward to Admin</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredChanges.length === 0 && (
            <div className="p-12 text-center">
              <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No pending reviews</h3>
              <p className="text-gray-600">
                {pendingChanges.length === 0 
                  ? 'All changes have been reviewed.' 
                  : 'Try adjusting your search or filter criteria.'}
              </p>
            </div>
          )}
        </div>
      </div>

      <ReviewModal
        change={selectedChange}
        isOpen={isReviewModalOpen}
        onClose={() => {
          setIsReviewModalOpen(false);
          setSelectedChange(null);
        }}
        onForward={forwardToAdmin}
      />
    </div>
  );
}