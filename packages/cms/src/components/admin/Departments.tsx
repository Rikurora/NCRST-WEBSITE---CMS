import React, { useState } from 'react';
import { Building2, Users, Calendar, Plus, Edit, Search } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useContent } from '../../context/ContentContext';
import { Department } from '../../types';

interface CreateDepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (department: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

interface EditDepartmentModalProps {
  department: Department | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, updates: Partial<Department>) => void;
}

function CreateDepartmentModal({ isOpen, onClose, onSave }: CreateDepartmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    manager: '',
    editors: [] as string[],
    status: 'active' as 'active' | 'inactive',
    sections: [] as string[]
  });

  const [sectionsInput, setSectionsInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sections = sectionsInput.split(',').map(s => s.trim()).filter(s => s);
    onSave({ ...formData, sections });
    setFormData({
      name: '',
      code: '',
      description: '',
      manager: '',
      editors: [],
      status: 'active',
      sections: []
    });
    setSectionsInput('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Department" size="xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department Code</label>
          <input
            type="text"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            placeholder="e.g., OCEO, BSS"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
          <input
            type="text"
            value={formData.manager}
            onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Editable Sections</label>
          <input
            type="text"
            value={sectionsInput}
            onChange={(e) => setSectionsInput(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            placeholder="e.g., CEO Message, Updates, News (comma separated)"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Enter sections separated by commas</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
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
            Add Department
          </button>
        </div>
      </form>
    </Modal>
  );
}

function EditDepartmentModal({ department, isOpen, onClose, onSave }: EditDepartmentModalProps) {
  const [formData, setFormData] = useState<Partial<Department>>(department || {});
  const [sectionsInput, setSectionsInput] = useState('');

  React.useEffect(() => {
    if (department) {
      setFormData(department);
      setSectionsInput(department.sections?.join(', ') || '');
    }
  }, [department]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (department && formData) {
      const sections = sectionsInput.split(',').map(s => s.trim()).filter(s => s);
      onSave(department.id, { ...formData, sections });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Department" size="xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department Name</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department Code</label>
          <input
            type="text"
            value={formData.code || ''}
            onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
          <input
            type="text"
            value={formData.manager || ''}
            onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Editable Sections</label>
          <input
            type="text"
            value={sectionsInput}
            onChange={(e) => setSectionsInput(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            placeholder="e.g., CEO Message, Updates, News (comma separated)"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Enter sections separated by commas</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={formData.status || ''}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
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
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
}

export function Departments() {
  const { departments, updateDepartment, createDepartment } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditDepartment = (department: Department) => {
    setSelectedDepartment(department);
    setIsEditModalOpen(true);
  };

  const handleSaveDepartment = (id: string, updates: Partial<Department>) => {
    updateDepartment(id, updates);
  };

  const handleCreateDepartment = (newDepartment: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => {
    createDepartment(newDepartment);
  };

  const departmentCounts = {
    total: departments.length,
    active: departments.filter(d => d.status === 'active').length,
    inactive: departments.filter(d => d.status === 'inactive').length,
    totalEditors: departments.reduce((sum, dept) => sum + dept.editors.length, 0)
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#777675] mb-2">Department Management</h2>
        <p className="text-gray-600">Configure departments and organizational structure</p>
      </div>

      {/* Department Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-gray-600">{departmentCounts.total}</div>
          <div className="text-sm text-gray-600">Total Departments</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">{departmentCounts.active}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-red-600">{departmentCounts.inactive}</div>
          <div className="text-sm text-gray-600">Inactive</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">{departmentCounts.totalEditors}</div>
          <div className="text-sm text-gray-600">Total Editors</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-[#ffd332]/10">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              />
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
            >
              <Plus className="h-4 w-4" />
              <span>Add Department</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {filteredDepartments.map((department) => (
            <div key={department.id} className="bg-gradient-to-br from-gray-50 to-[#ffd332]/10 rounded-lg border-2 border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffd332] to-[#e6be2d] rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-[#777675]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{department.name}</h3>
                    <p className="text-sm text-gray-600">{department.code}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  department.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {department.status}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{department.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span><strong>Manager:</strong> {department.manager}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span><strong>Editors:</strong> {department.editors.length}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4" />
                  <span><strong>Sections:</strong> {department.sections?.length || 0}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span><strong>Updated:</strong> {new Date(department.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => handleEditDepartment(department)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                  <Users className="h-4 w-4" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
          
          <div
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-[#ffd332] hover:bg-[#ffd332]/5 cursor-pointer transition-all duration-300"
          >
            <Building2 className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Add New Department</h3>
            <p className="text-sm text-gray-500">Create a new organizational unit</p>
          </div>
        </div>
      </div>

      <EditDepartmentModal
        department={selectedDepartment}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedDepartment(null);
        }}
        onSave={handleSaveDepartment}
      />

      <CreateDepartmentModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateDepartment}
      />
    </div>
  );
}