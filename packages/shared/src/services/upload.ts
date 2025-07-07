import axios, { AxiosProgressEvent } from 'axios';
import { apiService } from './api';

export interface UploadProgress {
  percentage: number;
  loaded: number;
  total: number;
}

export interface UploadResponse {
  id: number;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
  uploaded_at: string;
}

export interface UploadOptions {
  maxSize?: number; // in bytes
  allowedTypes?: string[]; // e.g., ['image/jpeg', 'image/png']
  onProgress?: (progress: UploadProgress) => void;
}

class UploadService {
  private readonly defaultOptions: UploadOptions = {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
  };

  validateFile(file: File, options: UploadOptions = {}): string | null {
    const { maxSize, allowedTypes } = { ...this.defaultOptions, ...options };

    if (maxSize && file.size > maxSize) {
      return `File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds maximum allowed size (${(maxSize / 1024 / 1024).toFixed(2)}MB)`;
    }

    if (allowedTypes && !allowedTypes.includes(file.type)) {
      return `File type ${file.type} is not allowed. Allowed types: ${allowedTypes.join(', ')}`;
    }

    return null;
  }

  async uploadFile(
    file: File,
    options: UploadOptions = {}
  ): Promise<UploadResponse> {
    const validationError = this.validateFile(file, options);
    if (validationError) {
      throw new Error(validationError);
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<UploadResponse>(
        `${apiService.getBaseUrl()}/uploads`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            if (options.onProgress && progressEvent.total) {
              options.onProgress({
                percentage: Math.round((progressEvent.loaded * 100) / progressEvent.total),
                loaded: progressEvent.loaded,
                total: progressEvent.total,
              });
            }
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error('Failed to upload file');
    }
  }

  async uploadImage(
    file: File,
    options: UploadOptions = {}
  ): Promise<UploadResponse> {
    const imageOptions: UploadOptions = {
      ...this.defaultOptions,
      ...options,
      allowedTypes: ['image/jpeg', 'image/png', 'image/gif'],
      maxSize: 5 * 1024 * 1024, // 5MB for images
    };

    return this.uploadFile(file, imageOptions);
  }

  async uploadDocument(
    file: File,
    options: UploadOptions = {}
  ): Promise<UploadResponse> {
    const documentOptions: UploadOptions = {
      ...this.defaultOptions,
      ...options,
      allowedTypes: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ],
      maxSize: 10 * 1024 * 1024, // 10MB for documents
    };

    return this.uploadFile(file, documentOptions);
  }

  getFileUrl(filePath: string): string {
    return `${apiService.getBaseUrl()}/uploads/${filePath}`;
  }
}

export const uploadService = new UploadService(); 