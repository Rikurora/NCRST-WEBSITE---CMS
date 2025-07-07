import { ApiConfig, ApiResponse, BackendNewsArticle, NewsArticle, BackendEvent, Event } from '../types';

// Date utilities
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatDateTime = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const d = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatDate(date);
};

// String utilities
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

// Array utilities
export const groupBy = <T, K extends keyof any>(
  array: T[],
  key: (item: T) => K
): Record<K, T[]> => {
  return array.reduce((groups, item) => {
    const group = key(item);
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {} as Record<K, T[]>);
};

export const sortBy = <T>(
  array: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

// Status utilities
export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'active':
    case 'approved':
    case 'published':
      return 'text-green-600 bg-green-100';
    case 'pending':
    case 'pending_review':
    case 'pending_approval':
      return 'text-yellow-600 bg-yellow-100';
    case 'rejected':
    case 'inactive':
      return 'text-red-600 bg-red-100';
    case 'draft':
      return 'text-gray-600 bg-gray-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const getStatusBadge = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'active':
    case 'approved':
    case 'published':
      return 'bg-green-100 text-green-800';
    case 'pending':
    case 'pending_review':
    case 'pending_approval':
      return 'bg-yellow-100 text-yellow-800';
    case 'inactive':
    case 'rejected':
    case 'sent_back':
      return 'bg-red-100 text-red-800';
    case 'draft':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Local storage utilities
export const setLocalStorage = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getLocalStorage = <T>(key: string, defaultValue?: T): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue || null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue || null;
  }
};

export const removeLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// API Configuration
const DEFAULT_API_CONFIG: ApiConfig = {
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://api.ncrst.na' 
    : 'http://localhost:8000',
  timeout: 10000,
  retries: 3
};

let apiConfig = DEFAULT_API_CONFIG;

export function setApiConfig(config: Partial<ApiConfig>) {
  apiConfig = { ...apiConfig, ...config };
}

export function getApiConfig(): ApiConfig {
  return apiConfig;
}

// API Client
class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private retries: number;

  constructor(config: ApiConfig = apiConfig) {
    this.baseUrl = config.baseUrl;
    this.timeout = config.timeout;
    this.retries = config.retries;
  }

  private async fetchWithRetry(url: string, options: RequestInit = {}, retryCount = 0): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status >= 500 && retryCount < this.retries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
          return this.fetchWithRetry(url, options, retryCount + 1);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      
      if (retryCount < this.retries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        return this.fetchWithRetry(url, options, retryCount + 1);
      }
      
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/api${endpoint}`);
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/api${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/api${endpoint}`, {
        method: 'PUT',
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/api${endpoint}`, {
        method: 'DELETE',
      });
      const data = response.status === 204 ? null : await response.json();
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Data transformation utilities
export function transformNewsArticle(backendArticle: BackendNewsArticle): NewsArticle {
  return {
    id: backendArticle.id,
    title: backendArticle.title,
    excerpt: backendArticle.excerpt || '',
    category: mapNewsCategory(backendArticle.category?.name),
    date: formatDate(backendArticle.created_at),
    readTime: backendArticle.read_time || '5 min read',
    image: backendArticle.image_url || '/placeholder-news.jpg',
    featured: backendArticle.featured || false,
    content: backendArticle.content || undefined,
  };
}

export function transformEvent(backendEvent: BackendEvent): Event {
  return {
    title: backendEvent.title,
    date: formatDate(backendEvent.start_date),
    location: backendEvent.location || 'TBA',
    type: mapEventType(backendEvent.event_type || undefined),
    description: backendEvent.description || '',
    registrationRequired: backendEvent.registration_required || false,
    registrationDeadline: backendEvent.registration_deadline ? 
      formatDate(backendEvent.registration_deadline) : undefined,
    maxParticipants: backendEvent.max_participants || undefined,
  };
}

// Helper mapping functions
function mapNewsCategory(categoryName?: string): NewsArticle['category'] {
  if (!categoryName) return 'science';
  
  const name = categoryName.toLowerCase();
  if (name.includes('research')) return 'research';
  if (name.includes('innovation')) return 'innovation';
  if (name.includes('technology')) return 'technology';
  if (name.includes('biosafety')) return 'biosafety';
  if (name.includes('event')) return 'events';
  return 'science';
}

function mapEventType(eventType?: string): Event['type'] {
  if (!eventType) return 'Seminar';
  
  const type = eventType.toLowerCase();
  if (type.includes('conference')) return 'Conference';
  if (type.includes('competition')) return 'Competition';
  if (type.includes('workshop')) return 'Workshop';
  if (type.includes('hearing')) return 'Public Hearing';
  return 'Seminar';
}

// API service functions
export async function fetchNewsArticles(): Promise<NewsArticle[]> {
  const response = await apiClient.get<BackendNewsArticle[]>('/news_articles');
  if (response.success && response.data) {
    return response.data.map(transformNewsArticle);
  }
  return [];
}

export async function fetchEvents(): Promise<Event[]> {
  const response = await apiClient.get<BackendEvent[]>('/science_events');
  if (response.success && response.data) {
    return response.data.map(transformEvent);
  }
  return [];
}

export async function fetchNewsArticle(id: number): Promise<NewsArticle | null> {
  const response = await apiClient.get<BackendNewsArticle>(`/news_articles/${id}`);
  if (response.success && response.data) {
    return transformNewsArticle(response.data);
  }
  return null;
}

// Error handling utility
export function handleApiError(error: any): string {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

// Cache utilities for better performance
class SimpleCache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  set(key: string, data: any, ttl: number = 300000): void { // 5 minute default TTL
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }

  delete(key: string): void {
    this.cache.delete(key);
  }
}

export const cache = new SimpleCache();

// Cached API functions
export async function fetchNewsArticlesCached(): Promise<NewsArticle[]> {
  const cacheKey = 'news_articles';
  const cached = cache.get<NewsArticle[]>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const articles = await fetchNewsArticles();
  cache.set(cacheKey, articles);
  return articles;
}

export async function fetchEventsCached(): Promise<Event[]> {
  const cacheKey = 'events';
  const cached = cache.get<Event[]>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const events = await fetchEvents();
  cache.set(cacheKey, events);
  return events;
} 