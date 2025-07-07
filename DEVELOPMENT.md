# NCRST Development Workflow

This guide explains how to work with the integrated NCRST monorepo that includes both frontend and backend components.

## 🏗️ Architecture Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                             │
├─────────────────────┬───────────────────┬───────────────────┤
│       CMS           │     Website       │     Shared        │
│   (React App)       │   (React App)     │   (Components,    │
│   Port: 5173        │   Port: 5174      │   Types, Utils)   │
└─────────────────────┴───────────────────┴───────────────────┘
                              │
                              │ HTTP API Calls
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        Backend                              │
├─────────────────────────────────────────────────────────────┤
│              Symfony API + API Platform                    │
│                     Port: 8000                             │
│                       │                                     │
│                       ▼                                     │
│                 MySQL Database                              │
│                   Port: 3306                               │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### First Time Setup

```bash
# Clone and setup everything
git clone <repository-url>
cd ncrst-monorepo
npm run setup
```

### Daily Development

```bash
# Start everything
npm run dev

# Or start components individually
npm run dev:frontend  # CMS + Website only
npm run dev:backend   # API + Database only
```

## 📋 Development Workflows

### 1. Adding New Backend Entity

When you need to add a new data type (e.g., "Publications"):

#### Backend Steps

```bash
# 1. Access backend container
npm run backend:shell

# 2. Create new entity
php bin/console make:entity Publication

# 3. Add API Platform annotations to expose REST API
# Edit the generated entity file and add @ApiResource
```

#### Example Entity

```php
<?php
// Backend/website-backend/src/Entity/Publication.php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ApiResource(
 *  normalizationContext={"groups"={"publication:read"}},
 *  denormalizationContext={"groups"={"publication:write"}}
 * )
 */
class Publication
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"publication:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"publication:read", "publication:write"})
     */
    private $title;

    // ... other properties and methods
}
```

#### Frontend Integration

```bash
# 1. Add TypeScript types
# Edit packages/shared/src/types/index.ts
```

```typescript
// Add backend type
export interface BackendPublication {
  id: number;
  title: string;
  authors: string | null;
  published_date: string;
  journal: string | null;
  doi: string | null;
  abstract: string | null;
  created_at: string;
}

// Add frontend type
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  publishedDate: string;
  journal?: string;
  doi?: string;
  abstract?: string;
}
```

```bash
# 2. Add API utilities
# Edit packages/shared/src/utils/index.ts
```

```typescript
// Add transformation function
export function transformPublication(backendPub: BackendPublication): Publication {
  return {
    id: backendPub.id,
    title: backendPub.title,
    authors: backendPub.authors ? backendPub.authors.split(',') : [],
    publishedDate: formatDate(backendPub.published_date),
    journal: backendPub.journal || undefined,
    doi: backendPub.doi || undefined,
    abstract: backendPub.abstract || undefined,
  };
}

// Add API fetch function
export async function fetchPublications(): Promise<Publication[]> {
  const response = await apiClient.get<BackendPublication[]>('/publications');
  if (response.success && response.data) {
    return response.data.map(transformPublication);
  }
  return [];
}
```

#### Database Migration

```bash
# Create and run migration
npm run backend:shell
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

### 2. Using Backend Data in Frontend Components

#### In CMS

```typescript
// packages/cms/src/components/PublicationManager.tsx
import React, { useState, useEffect } from 'react';
import { fetchPublications, Publication } from '@ncrst/shared/utils';
import { Card } from '@ncrst/shared/components';

export function PublicationManager() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const data = await fetchPublications();
        setPublications(data);
      } catch (error) {
        console.error('Failed to load publications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid gap-4">
      {publications.map(pub => (
        <Card
          key={pub.id}
          title={pub.title}
          description={pub.abstract || 'No abstract available'}
        />
      ))}
    </div>
  );
}
```

#### In Website

```typescript
// packages/website/src/pages/Publications.tsx
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchPublications, Publication } from '@ncrst/shared/utils';

// Loader function for React Router
export async function publicationsLoader() {
  return await fetchPublications();
}

export function Publications() {
  const publications = useLoaderData() as Publication[];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Research Publications</h1>
      <div className="space-y-6">
        {publications.map(pub => (
          <article key={pub.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{pub.title}</h2>
            <p className="text-gray-600 mb-2">
              Authors: {pub.authors.join(', ')}
            </p>
            <p className="text-sm text-gray-500">
              Published: {pub.publishedDate}
            </p>
            {pub.abstract && (
              <p className="mt-4 text-gray-700">{pub.abstract}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
```

### 3. Adding New Shared Components

#### Create Component

```typescript
// packages/shared/src/components/DataTable.tsx
import React from 'react';

interface DataTableProps<T> {
  data: T[];
  columns: Array<{
    key: keyof T;
    header: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
  }>;
  onRowClick?: (item: T) => void;
}

export function DataTable<T>({ data, columns, onRowClick }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(col => (
              <th key={String(col.key)} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr 
              key={index}
              onClick={() => onRowClick?.(item)}
              className={onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
            >
              {columns.map(col => (
                <td key={String(col.key)} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {col.render ? col.render(item[col.key], item) : String(item[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

#### Export Component

```typescript
// packages/shared/src/components/index.ts
export { Card } from './Card';
export { Button } from './Button';
export { Modal } from './Modal';
export { DataTable } from './DataTable'; // Add new component
```

#### Use in Projects

```typescript
// In CMS or Website
import { DataTable } from '@ncrst/shared/components';

// Usage
<DataTable
  data={publications}
  columns={[
    { key: 'title', header: 'Title' },
    { key: 'authors', header: 'Authors', render: (authors) => authors.join(', ') },
    { key: 'publishedDate', header: 'Published' },
  ]}
  onRowClick={(pub) => console.log('Clicked:', pub)}
/>
```

## 🔧 Common Development Tasks

### Backend Tasks

#### Check API Endpoints

```bash
# View all available routes
npm run backend:shell
php bin/console debug:router
```

#### Database Operations

```bash
# Create migration
php bin/console make:migration

# Run migrations
npm run backend:migrate

# Check database status
php bin/console doctrine:migrations:status

# Reset database (careful!)
php bin/console doctrine:database:drop --force
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

#### View API Documentation

Open `http://localhost:8000/api` in your browser to see the auto-generated API documentation.

### Frontend Tasks

#### Build Shared Package

```bash
# After making changes to shared package
npm run build --workspace=packages/shared
```

#### Type Checking

```bash
# Check types in all packages
npm run type-check --workspaces
```

#### Linting

```bash
# Lint all packages
npm run lint

# Fix linting issues
npm run lint:fix
```

### Cache Management

#### Clear API Cache

```typescript
import { cache } from '@ncrst/shared/utils';

// Clear all cached data
cache.clear();

// Clear specific cache entry
cache.delete('news_articles');
```

#### Clear Backend Cache

```bash
npm run backend:shell
php bin/console cache:clear
```

## 🐛 Debugging

### Backend Debugging

#### Check Logs

```bash
# View backend logs
npm run backend:logs

# View specific service logs
docker-compose -f Backend/docker-compose.yml logs backend
docker-compose -f Backend/docker-compose.yml logs db
```

#### Database Debugging

```bash
# Access PHPMyAdmin
open http://localhost:8080

# Or use command line
npm run backend:shell
php bin/console doctrine:query:sql "SELECT * FROM news_articles LIMIT 5"
```

### Frontend Debugging

#### API Call Debugging

```typescript
// Enable detailed API logging
import { setApiConfig } from '@ncrst/shared/utils';

setApiConfig({
  baseUrl: 'http://localhost:8000',
  timeout: 15000,
  debug: true // If we add this feature
});
```

#### Network Issues

1. Check if backend is running: `curl http://localhost:8000/api`
2. Check CORS headers in browser developer tools
3. Verify API endpoint exists: `http://localhost:8000/api` (API docs)

## 🔄 Data Flow

### Typical Request Flow

1. **Frontend Component** makes API call using shared utilities
2. **Shared API Client** sends HTTP request to backend
3. **Symfony API Platform** processes request
4. **Doctrine ORM** queries MySQL database
5. **Backend** returns JSON response
6. **Shared Utilities** transform data to frontend format
7. **Frontend Component** receives typed data

### Error Handling Flow

1. **Backend Error** (4xx/5xx response)
2. **API Client** catches error and retries if applicable
3. **Transformation Function** returns empty array/null on failure
4. **Frontend Component** shows error state or fallback content

## 🔒 Authentication (When Implemented)

### JWT Token Flow

```typescript
// Login and store token
const response = await apiClient.post('/auth/login', { email, password });
if (response.success) {
  localStorage.setItem('jwt_token', response.data.token);
}

// API client automatically includes token in headers
const protectedData = await apiClient.get('/protected-endpoint');
```

## 📊 Performance Optimization

### Caching Strategies

1. **API Response Caching**: Automatic 5-minute cache for GET requests
2. **Database Query Optimization**: Use Doctrine query builder efficiently
3. **Frontend Bundle Splitting**: Lazy load pages and components

### Monitoring

- Backend performance: Check Symfony profiler at `http://localhost:8000/_profiler`
- Frontend performance: Use React DevTools Profiler
- Database performance: Check slow query log in PHPMyAdmin

## 🚀 Deployment Preparation

### Pre-deployment Checklist

- [ ] Build all frontend packages: `npm run build`
- [ ] Test API endpoints work correctly
- [ ] Check environment variables are set for production
- [ ] Verify database migrations are up to date
- [ ] Test CORS configuration for production domain
- [ ] Update API base URL for production

### Production Environment Variables

```bash
# Backend
APP_ENV=prod
DATABASE_URL=mysql://user:pass@prod-host:3306/ncrst
CORS_ALLOW_ORIGIN=^https://ncrst\.na$

# Frontend build
REACT_APP_API_URL=https://api.ncrst.na
```

### This development workflow ensures smooth collaboration between frontend and backend development while maintaining type safety and code quality across the entire stack