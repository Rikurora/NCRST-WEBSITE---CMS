import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, Globe } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useContent } from '../../context/ContentContext';
import { useAuth } from '../../context/AuthContext';
import { ContentItem } from '../../types';

interface CreateContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  userDepartment: string;
  departmentSections: string[];
}

interface EditContentModalProps {
  content: ContentItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, updates: Partial<ContentItem>) => void;
  onDelete: (id: string) => void;
  departmentSections: string[];
}

function CreateContentModal({ isOpen, onClose, onSave, userDepartment, departmentSections }: CreateContentModalProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    type: 'webpage' as ContentItem['type'],
    section: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      author: user?.name || '',
      department: userDepartment,
      status: 'pending_review'
    });
    setFormData({ title: '', type: 'webpage', section: '', content: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Create New Content - ${userDepartment}`} maxWidth="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as ContentItem['type'] })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            >
              <option value="webpage">Webpage</option>
              <option value="blog">Blog</option>
              <option value="news">News</option>
              <option value="product">Product</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
          <select
            value={formData.section}
            onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          >
            <option value="">Select Section</option>
            {departmentSections.map((section) => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>
        
        <div className="bg-[#ffd332]/10 border border-[#ffd332] rounded-md p-3">
          <p className="text-sm text-[#777675]">
            <strong>Note:</strong> This content will be submitted for review by the checker before it can be approved for publication.
          </p>
        </div>
        
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
          >
            Submit for Review
          </button>
        </div>
      </form>
    </Modal>
  );
}

function EditContentModal({ content, isOpen, onClose, onSave, onDelete, departmentSections }: EditContentModalProps) {
  const [formData, setFormData] = useState(content || {} as ContentItem);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  React.useEffect(() => {
    if (content) {
      setFormData(content);
    }
  }, [content]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content) {
      onSave(content.id, { ...formData, status: 'pending_review' });
      onClose();
    }
  };

  const handleDelete = () => {
    if (content) {
      onDelete(content.id);
      onClose();
    }
  };

  const canEdit = content?.status === 'draft' || content?.status === 'sent_back';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Content" maxWidth="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
              disabled={!canEdit}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
            <select
              value={formData.section || ''}
              onChange={(e) => setFormData({ ...formData, section: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
              disabled={!canEdit}
            >
              <option value="">Select Section</option>
              {departmentSections.map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={formData.content || ''}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
            disabled={!canEdit}
          />
        </div>

        {content?.rejectionReason && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <div className="font-medium text-red-900 text-sm">Feedback for Amendment:</div>
            <div className="text-red-800 text-sm mt-1">{content.rejectionReason}</div>
          </div>
        )}
        
        {showDeleteConfirm && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-sm text-red-800 mb-3">
              Are you sure you want to delete this content? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleDelete}
                className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Confirm Delete
              </button>
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        
        <div className="flex justify-between pt-4">
          {canEdit && (
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </button>
          )}
          
          <div className="flex space-x-3 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              {canEdit ? 'Cancel' : 'Close'}
            </button>
            {canEdit && (
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
              >
                Submit for Review
              </button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}

export function ContentManagement() {
  const { content, createContent, updateContent, deleteContent, publishContent, departments } = useContent();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);

  // Filter content for current user's department only
  const myContent = content.filter(item => item.department === user?.department);
  const filteredContent = myContent.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get department sections
  const userDepartment = departments.find(dept => dept.code === user?.department);
  const departmentSections = userDepartment?.sections || [];

  const handleEditContent = (contentItem: ContentItem) => {
    setSelectedContent(contentItem);
    setIsEditModalOpen(true);
  };

  const handlePublish = (contentId: string) => {
    publishContent(contentId);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#777675] mb-2">Content Management</h2>
        <p className="text-gray-600">Create and manage content for {user?.department} department</p>
        <div className="text-sm text-gray-500 mt-2">
          You can only edit content for your department: {user?.department}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-[#ffd332]/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
                />
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
            
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
            >
              <Plus className="h-4 w-4" />
              <span>New Content</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredContent.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.section}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 capitalize">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        item.status === 'published' ? 'bg-green-100 text-green-800' :
                        item.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'pending_approval' ? 'bg-[#ffd332]/20 text-[#777675]' :
                        item.status === 'pending_review' ? 'bg-orange-100 text-orange-800' :
                        item.status === 'sent_back' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {item.status === 'pending_review' ? 'Pending Review' :
                       item.status === 'pending_approval' ? 'Pending Approval' :
                       item.status === 'sent_back' ? 'Sent Back' :
                       item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleEditContent(item)}
                        className="text-[#ffd332] hover:text-[#e6be2d]"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      {item.status === 'approved' && (
                        <button
                          onClick={() => handlePublish(item.id)}
                          className="flex items-center space-x-1 px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                        >
                          <Globe className="h-3 w-3" />
                          <span>Post</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredContent.length === 0 && (
          <div className="p-12 text-center">
            <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search criteria.' : `Start creating content for ${user?.department} department.`}
            </p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
            >
              Create First Content
            </button>
          </div>
        )}
      </div>

      <CreateContentModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={createContent}
        userDepartment={user?.department || ''}
        departmentSections={departmentSections}
      />

      <EditContentModal
        content={selectedContent}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedContent(null);
        }}
        onSave={updateContent}
        onDelete={deleteContent}
        departmentSections={departmentSections}
      />
    </div>
  );
}