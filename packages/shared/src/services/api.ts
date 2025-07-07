import axios, { AxiosInstance, AxiosResponse } from 'axios';
import type { ImpactMetric, NsfStatistic } from '../types/entities';

class ApiService {
  private api: AxiosInstance;
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
    this.api = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add response interceptor for hydra pagination
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        // If the response has hydra members, return them directly
        if (response.data['hydra:member']) {
          return {
            ...response,
            data: response.data['hydra:member'],
            totalItems: response.data['hydra:totalItems'],
          };
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  getBaseUrl(): string {
    return this.baseURL;
  }

  // Generic CRUD operations
  async getAll<T>(endpoint: string): Promise<T[]> {
    const response = await this.api.get<T[]>(endpoint);
    return response.data;
  }

  async getOne<T>(endpoint: string, id: number): Promise<T> {
    const response = await this.api.get<T>(`${endpoint}/${id}`);
    return response.data;
  }

  async create<T>(endpoint: string, data: Partial<T>): Promise<T> {
    const response = await this.api.post<T>(endpoint, data);
    return response.data;
  }

  async update<T>(endpoint: string, id: number, data: Partial<T>): Promise<T> {
    const response = await this.api.put<T>(`${endpoint}/${id}`, data);
    return response.data;
  }

  async delete(endpoint: string, id: number): Promise<void> {
    await this.api.delete(`${endpoint}/${id}`);
  }

  // Specific endpoints for different entities
  impactMetrics = {
    getAll: () => this.getAll<ImpactMetric>('/impact_metrics'),
    getOne: (id: number) => this.getOne<ImpactMetric>('/impact_metrics', id),
    create: (data: Partial<ImpactMetric>) => this.create<ImpactMetric>('/impact_metrics', data),
    update: (id: number, data: Partial<ImpactMetric>) => this.update<ImpactMetric>('/impact_metrics', id, data),
    delete: (id: number) => this.delete('/impact_metrics', id),
  };

  nsfStatistics = {
    getAll: () => this.getAll<NsfStatistic>('/nsf_statistics'),
    getOne: (id: number) => this.getOne<NsfStatistic>('/nsf_statistics', id),
    create: (data: Partial<NsfStatistic>) => this.create<NsfStatistic>('/nsf_statistics', data),
    update: (id: number, data: Partial<NsfStatistic>) => this.update<NsfStatistic>('/nsf_statistics', id, data),
    delete: (id: number) => this.delete('/nsf_statistics', id),
  };

  // Add more entity-specific endpoints here...
}

export const apiService = new ApiService(); 