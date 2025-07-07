// Core CMS Types - these are now in entities.ts
export * from './entities';

// Backend API Types (matching Symfony entities)
export interface BackendNewsArticle {
  id: number;
  title: string;
  excerpt: string | null;
  content: string | null;
  category: BackendNewsCategory;
  read_time: string | null;
  image_url: string | null;
  featured: boolean | null;
  created_at: string;
}

export interface BackendNewsCategory {
  id: number;
  name: string;
  description: string | null;
  newsArticles?: BackendNewsArticle[];
}

export interface BackendEvent {
  id: number;
  title: string;
  description: string | null;
  start_date: string;
  end_date: string | null;
  location: string | null;
  event_type: string | null;
  registration_required: boolean | null;
  registration_deadline: string | null;
  max_participants: number | null;
  created_at: string;
}

export interface BackendCouncil {
  id: number;
  name: string;
  description: string | null;
  mandate: string | null;
  established_date: string | null;
  contact_email: string | null;
  image_url: string | null;
  status: string | null;
  created_at: string;
}

export interface BackendCouncilMember {
  id: number;
  name: string;
  position: string | null;
  expertise: string | null;
  bio: string | null;
  image_url: string | null;
  email: string | null;
  council: BackendCouncil;
  created_at: string;
}

export interface BackendBoardCommissioner {
  id: number;
  name: string;
  position: string | null;
  bio: string | null;
  expertise: string | null;
  image_url: string | null;
  email: string | null;
  start_date: string | null;
  end_date: string | null;
  status: string | null;
  created_at: string;
}

export interface BackendResearchGrant {
  id: number;
  title: string;
  description: string | null;
  amount: number | null;
  application_deadline: string | null;
  requirements: string | null;
  contact_info: string | null;
  status: string | null;
  created_at: string;
}

export interface BackendInnovationChallenge {
  id: number;
  title: string;
  description: string | null;
  prize_amount: number | null;
  application_deadline: string | null;
  requirements: string | null;
  evaluation_criteria: string | null;
  contact_info: string | null;
  status: string | null;
  category: BackendInnovationChallengeCategory;
  created_at: string;
}

export interface BackendInnovationChallengeCategory {
  id: number;
  name: string;
  description: string | null;
  innovationChallenges?: BackendInnovationChallenge[];
}

export interface BackendVacancy {
  id: number;
  title: string;
  department: string | null;
  location: string | null;
  employment_type: string | null;
  salary_range: string | null;
  application_deadline: string | null;
  job_description: string | null;
  contact_info: string | null;
  status: string | null;
  created_at: string;
}

export interface BackendResource {
  id: number;
  title: string;
  description: string | null;
  file_url: string | null;
  external_url: string | null;
  file_size: number | null;
  file_type: string | null;
  download_count: number | null;
  category: BackendResourceCategory;
  created_at: string;
}

export interface BackendResourceCategory {
  id: number;
  name: string;
  description: string | null;
  resources?: BackendResource[];
}

// Website Types (mapped from backend)
// NewsArticle is now defined in entities.ts

export interface Event {
  title: string;
  date: string;
  location: string;
  type: 'Conference' | 'Competition' | 'Workshop' | 'Public Hearing' | 'Seminar';
  description: string;
  registrationRequired?: boolean;
  registrationDeadline?: string;
  maxParticipants?: number;
}

export interface PressRelease {
  title: string;
  date: string;
  summary: string;
  content?: string;
  attachments?: string[];
}

export interface BoardMember {
  name: string;
  role: string;
  committees: string[];
  expertise: string;
  image?: string;
}

export interface Council {
  name: string;
  description: string;
  members: string;
  link: string;
  image?: string;
}

export interface Legislation {
  title: string;
  year: string;
  description: string;
  status: string;
  documentUrl?: string;
}

export interface StrategicPillar {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  link: string;
}

export interface PriorityProgram {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  link: string;
}

// Common UI Types
export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavItem[];
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
  onClick?: () => void;
  badge?: string;
  variant?: 'default' | 'gold' | 'grey' | 'blue' | 'green';
  children?: React.ReactNode;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// API Configuration
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ContentForm {
  title: string;
  type: 'webpage' | 'blog' | 'news' | 'product';
  section: string;
  content: string;
  department: string;
}

// Data Transformation Types
export type BackendToFrontend<T> = T extends BackendNewsArticle
  ? any // NewsArticle is now in entities.ts
  : T extends BackendEvent
  ? Event
  : T;

// Theme Types
export interface NCRSTTheme {
  colors: {
    grey: string;
    gold: string;
    green: string;
    blue: string;
    yellow: string;
    'grey-light': string;
    'grey-dark': string;
  };
  fonts: {
    sans: string[];
  };
  spacing: {
    '18': string;
    '88': string;
    'page': string;
  };
} 