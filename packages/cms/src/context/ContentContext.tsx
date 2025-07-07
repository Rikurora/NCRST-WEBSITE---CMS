import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContentItem, Change, Department, User, Notification } from '../types';

interface ContentContextType {
  content: ContentItem[];
  changes: Change[];
  departments: Department[];
  users: User[];
  notifications: Notification[];
  createContent: (content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateContent: (id: string, updates: Partial<ContentItem>) => void;
  deleteContent: (id: string) => void;
  reviewChange: (changeId: string, approved: boolean, notes: string, reviewedBy: string) => void;
  approveChange: (changeId: string, approved: boolean, reason: string, approvedBy: string) => void;
  forwardToAdmin: (changeId: string, checkerNotes: string) => void;
  publishContent: (contentId: string) => void;
  createChange: (change: Omit<Change, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
  createUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateDepartment: (id: string, updates: Partial<Department>) => void;
  createDepartment: (department: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => void;
  markNotificationRead: (notificationId: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Mock data with department sections
const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Office of the CEO',
    code: 'OCEO',
    description: 'Executive leadership and strategic direction for NCRST',
    manager: 'John Smith',
    editors: ['oceo.editor1@ncrst.na', 'oceo.editor2@ncrst.na'],
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    sections: ['CEO Message', 'Executive Updates', 'Strategic Vision', 'Leadership Team']
  },
  {
    id: '2',
    name: 'Business Support Services',
    code: 'BSS',
    description: 'Administrative and operational support services',
    manager: 'Sarah Johnson',
    editors: ['bss.editor1@ncrst.na', 'bss.editor2@ncrst.na'],
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10',
    sections: ['Support Services', 'Administrative Updates', 'Policies', 'Procedures']
  },
  {
    id: '3',
    name: 'Marketing',
    code: 'MKT',
    description: 'Marketing and communications department',
    manager: 'Mike Wilson',
    editors: ['marketing.editor1@ncrst.na', 'marketing.editor2@ncrst.na'],
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-12',
    sections: ['Product Launch', 'Campaign Content', 'Social Media', 'Press Releases']
  },
  {
    id: '4',
    name: 'Research & Development',
    code: 'RND',
    description: 'Research and development initiatives',
    manager: 'Dr. Lisa Brown',
    editors: ['rnd.editor1@ncrst.na', 'rnd.editor2@ncrst.na'],
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-08',
    sections: ['Research Projects', 'Innovation Updates', 'Technical Papers', 'Development News']
  }
];

const mockUsers: User[] = [
  {
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
  {
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
  {
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
  {
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
];

const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'CEO Message Update',
    type: 'webpage',
    section: 'CEO Message',
    content: 'Updated quarterly message from the CEO',
    author: 'John Smith',
    department: 'OCEO',
    status: 'pending_approval',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-16',
    reviewedBy: 'Content Checker',
    reviewedAt: '2024-01-16',
    checkerNotes: 'Content reviewed and approved by checker. Ready for final approval.'
  },
  {
    id: '2',
    title: 'New Product Launch',
    type: 'blog',
    section: 'Product Launch',
    content: 'Introducing our latest product line',
    author: 'Sarah Johnson',
    department: 'Marketing',
    status: 'pending_approval',
    createdAt: '2024-01-14',
    updatedAt: '2024-01-14',
    reviewedBy: 'Content Checker',
    reviewedAt: '2024-01-15',
    checkerNotes: 'Marketing content looks good, ready for approval.'
  },
  {
    id: '3',
    title: 'Research Update',
    type: 'news',
    section: 'Research Projects',
    content: 'Latest research findings and updates',
    author: 'Dr. Lisa Brown',
    department: 'RND',
    status: 'approved',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-12',
    reviewedBy: 'Content Checker',
    reviewedAt: '2024-01-11',
    approvedBy: 'CCM Administrator',
    approvedAt: '2024-01-12'
  }
];

const mockChanges: Change[] = [
  {
    id: '1',
    contentId: '1',
    type: 'update',
    title: 'CEO Message Update',
    description: 'Updated quarterly message from the CEO',
    author: 'John Smith',
    department: 'OCEO',
    status: 'pending_approval',
    createdAt: '2024-01-15',
    reviewedBy: 'Content Checker',
    reviewedAt: '2024-01-16',
    checkerNotes: 'Content reviewed and approved by checker. Ready for final approval.'
  },
  {
    id: '2',
    contentId: '2',
    type: 'create',
    title: 'New Product Launch',
    description: 'Introducing our latest product line',
    author: 'Sarah Johnson',
    department: 'Marketing',
    status: 'pending_approval',
    createdAt: '2024-01-14',
    reviewedBy: 'Content Checker',
    reviewedAt: '2024-01-15',
    checkerNotes: 'Marketing content looks good, ready for approval.'
  },
  {
    id: '3',
    contentId: '3',
    type: 'delete',
    title: 'Old Campaign Data',
    description: 'Removing outdated campaign information',
    author: 'Sarah Johnson',
    department: 'Marketing',
    status: 'approved',
    createdAt: '2024-01-12',
    reviewedBy: 'Content Checker',
    reviewedAt: '2024-01-13',
    approvedBy: 'CCM Administrator',
    approvedAt: '2024-01-13'
  },
  {
    id: '4',
    contentId: '4',
    type: 'create',
    title: 'Research Update',
    description: 'Latest research findings and updates',
    author: 'Dr. Lisa Brown',
    department: 'RND',
    status: 'pending_review',
    createdAt: '2024-01-16'
  }
];

const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    type: 'approval_needed',
    title: 'New Change Awaiting Approval',
    message: 'CEO Message Update is ready for your approval',
    read: false,
    createdAt: '2024-01-16',
    relatedId: '1'
  }
];

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentItem[]>(mockContent);
  const [changes, setChanges] = useState<Change[]>(mockChanges);
  const [departments, setDepartments] = useState<Department[]>(mockDepartments);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const createContent = (newContent: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const content: ContentItem = {
      ...newContent,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'pending_review'
    };
    setContent(prev => [...prev, content]);
    
    // Create a change record
    createChange({
      contentId: content.id,
      type: 'create',
      title: `Created: ${content.title}`,
      description: `New ${content.type} content created`,
      author: content.author,
      department: content.department,
      status: 'pending_review'
    });
  };

  const updateContent = (id: string, updates: Partial<ContentItem>) => {
    setContent(prev => prev.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date().toISOString() }
        : item
    ));
  };

  const deleteContent = (id: string) => {
    setContent(prev => prev.filter(item => item.id !== id));
  };

  const reviewChange = (changeId: string, approved: boolean, notes: string, reviewedBy: string) => {
    setChanges(prev => prev.map(change => 
      change.id === changeId 
        ? { 
            ...change, 
            status: approved ? 'reviewed' : 'rejected',
            reviewedBy,
            reviewedAt: new Date().toISOString(),
            checkerNotes: notes
          }
        : change
    ));
    
    // Update content status
    const change = changes.find(c => c.id === changeId);
    if (change) {
      updateContent(change.contentId, { 
        status: approved ? 'reviewed' : 'rejected',
        reviewedBy,
        reviewedAt: new Date().toISOString(),
        checkerNotes: notes
      });
    }
  };

  const forwardToAdmin = (changeId: string, checkerNotes: string) => {
    setChanges(prev => prev.map(change => 
      change.id === changeId 
        ? { 
            ...change, 
            status: 'pending_approval',
            checkerNotes
          }
        : change
    ));
    
    // Create notification for admin
    const change = changes.find(c => c.id === changeId);
    if (change) {
      const newNotification: Notification = {
        id: Date.now().toString(),
        userId: '1', // CCM Admin
        type: 'approval_needed',
        title: 'Change Ready for Approval',
        message: `${change.title} has been reviewed and is ready for your approval`,
        read: false,
        createdAt: new Date().toISOString(),
        relatedId: changeId
      };
      setNotifications(prev => [...prev, newNotification]);
    }
  };

  const approveChange = (changeId: string, approved: boolean, reason: string, approvedBy: string) => {
    setChanges(prev => prev.map(change => 
      change.id === changeId 
        ? { 
            ...change, 
            status: approved ? 'approved' : 'sent_back',
            approvedBy,
            approvedAt: new Date().toISOString(),
            rejectionReason: approved ? undefined : reason
          }
        : change
    ));
    
    // Update content status
    const change = changes.find(c => c.id === changeId);
    if (change) {
      updateContent(change.contentId, { 
        status: approved ? 'approved' : 'sent_back',
        approvedBy,
        approvedAt: new Date().toISOString(),
        rejectionReason: approved ? undefined : reason
      });
      
      // Create notification for editor
      const editor = users.find(u => u.name === change.author);
      if (editor) {
        const newNotification: Notification = {
          id: Date.now().toString(),
          userId: editor.id,
          type: approved ? 'approved' : 'sent_back',
          title: approved ? 'Change Approved' : 'Change Sent Back for Amendment',
          message: approved 
            ? `Your change "${change.title}" has been approved and can now be published`
            : `Your change "${change.title}" needs amendments: ${reason}`,
          read: false,
          createdAt: new Date().toISOString(),
          relatedId: changeId
        };
        setNotifications(prev => [...prev, newNotification]);
      }
    }
  };

  const publishContent = (contentId: string) => {
    updateContent(contentId, { status: 'published' });
  };

  const createChange = (newChange: Omit<Change, 'id' | 'createdAt'>) => {
    const change: Change = {
      ...newChange,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setChanges(prev => [...prev, change]);
  };

  const updateUser = (id: string, updates: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updates } : user
    ));
  };

  const createUser = (newUser: Omit<User, 'id' | 'createdAt'>) => {
    const user: User = {
      ...newUser,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setUsers(prev => [...prev, user]);
  };

  const updateDepartment = (id: string, updates: Partial<Department>) => {
    setDepartments(prev => prev.map(dept => 
      dept.id === id 
        ? { ...dept, ...updates, updatedAt: new Date().toISOString() }
        : dept
    ));
  };

  const createDepartment = (newDepartment: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => {
    const department: Department = {
      ...newDepartment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setDepartments(prev => [...prev, department]);
  };

  const markNotificationRead = (notificationId: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
  };

  return (
    <ContentContext.Provider value={{
      content,
      changes,
      departments,
      users,
      notifications,
      createContent,
      updateContent,
      deleteContent,
      reviewChange,
      approveChange,
      forwardToAdmin,
      publishContent,
      createChange,
      updateUser,
      createUser,
      updateDepartment,
      createDepartment,
      markNotificationRead
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}