// News & Articles
export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  image?: string;
  category?: NewsCategory;
}

export interface NewsCategory {
  id: number;
  name: string;
  description?: string;
}

// Research & Permits
export interface ResearchPermit {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  applicant: string;
  submissionDate: string;
  reviewDate?: string;
  reviewer?: string;
  comments?: string;
}

export interface ResearchGrant {
  id: number;
  title: string;
  description: string;
  amount: number;
  deadline: string;
  requirements: string;
}

// Science & Technology
export interface ScienceEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registrationLink?: string;
  maxAttendees?: number;
}

export interface Award {
  id: number;
  title: string;
  description: string;
  recipient: string;
  category: string;
  year: number;
  presentationDate: string;
  citation?: string;
}

export interface AiInitiative {
  id: number;
  title: string;
  description: string;
  status: 'planned' | 'in_progress' | 'completed';
  startDate: string;
  endDate?: string;
  budget: number;
  objectives: string;
  outcomes?: string;
}

// Innovation & Infrastructure
export interface InnovationChallenge {
  id: number;
  title: string;
  description: string;
  category: InnovationChallengeCategory;
  deadline: string;
  prize: string;
  requirements: string;
}

export interface InnovationChallengeCategory {
  id: number;
  name: string;
  description: string;
}

export interface ResearchInfrastructure {
  id: number;
  name: string;
  description: string;
  location: string;
  availability: string;
  specifications: string;
}

// Resources & Documents
export interface Resource {
  id: number;
  title: string;
  description?: string;
  fileName: string;
  filePath: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
}

export interface ResourceCategory {
  id: number;
  name: string;
  description?: string;
  slug: string;
}

// Procurement & Vacancies
export interface ProcurementBid {
  id: number;
  title: string;
  description: string;
  referenceNumber: string;
  status: 'open' | 'closed' | 'awarded' | 'cancelled';
  submissionDeadline: string;
  estimatedBudget: number;
  requirements: string;
  contactPerson: string;
  contactEmail: string;
}

export interface Vacancy {
  id: number;
  title: string;
  department: string;
  description: string;
  requirements: string;
  responsibilities: string;
  type: 'full-time' | 'part-time' | 'contract' | 'temporary';
  status: 'open' | 'closed' | 'filled';
  location: string;
  salary: string;
  closingDate: string;
  contactEmail: string;
}

export interface InternshipProgram {
  id: number;
  title: string;
  department: string;
  description: string;
  requirements: string;
  duration: string;
  stipend: string;
  status: 'open' | 'closed' | 'filled';
  startDate: string;
  endDate: string;
  applicationDeadline: string;
  benefits: string;
  mentorName: string;
  mentorEmail: string;
  maxPositions: number;
}

// Statistics & Metrics
export interface ImpactMetric {
  id: number;
  category: string;
  value: number;
  unit: string;
  year: number;
  description: string;
}

export interface ResearchStatistic {
  id: number;
  category: string;
  value: number;
  year: number;
  description: string;
}

export interface NsfStatistic {
  id: number;
  category: string;
  value: number;
  year: number;
  description: string;
}

export interface IImpactMetric {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

export interface INsfStatistic {
  id: number;
  statistic_name: string;
  value: string;
  description: string;
  year: number;
  chart_type: string;
  chart_data: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ccm_admin' | 'editor' | 'checker';
  department: string;
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin: string;
  canChangePassword: boolean;
}

export interface ContentItem {
  id: string;
  title: string;
  type: string;
  section: string;
  content: string;
  author: string;
  department: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  approvedBy?: string;
  approvedAt?: string;
  checkerNotes?: string;
  rejectionReason?: string;
}

export interface Change {
  id: string;
  contentId: string;
  type: 'create' | 'update' | 'delete';
  title: string;
  description: string;
  author: string;
  department: string;
  status: string;
  createdAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  approvedBy?: string;
  approvedAt?: string;
  checkerNotes?: string;
  rejectionReason?: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  manager: string;
  editors: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
  sections: string[];
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  relatedId: string;
} 