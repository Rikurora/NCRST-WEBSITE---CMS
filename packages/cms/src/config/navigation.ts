import { IconType } from 'react-icons';
import { 
  FiBook, 
  FiAward,
  FiBriefcase,
  FiClipboard,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiLayers,
  FiPieChart,
  FiUsers
} from 'react-icons/fi';
import { NavigationConfig } from '../types/navigation';

export interface NavItem {
  id: string;
  label: string;
  icon: IconType;
  path: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    id: 'content',
    label: 'Content',
    icon: FiFileText,
    path: '/content',
    children: [
      {
        id: 'news',
        label: 'News & Articles',
        icon: FiBook,
        path: '/content/news',
        children: [
          { id: 'articles', label: 'Articles', icon: FiFileText, path: '/content/news/articles' },
          { id: 'categories', label: 'Categories', icon: FiGrid, path: '/content/news/categories' }
        ]
      }
    ]
  },
  {
    id: 'research',
    label: 'Research',
    icon: FiDatabase,
    path: '/research',
    children: [
      { id: 'permits', label: 'Research Permits', icon: FiClipboard, path: '/research/permits' },
      { id: 'grants', label: 'Research Grants', icon: FiAward, path: '/research/grants' },
      { id: 'statistics', label: 'Statistics', icon: FiPieChart, path: '/research/statistics' }
    ]
  },
  {
    id: 'science',
    label: 'Science & Technology',
    icon: FiLayers,
    path: '/science',
    children: [
      { id: 'events', label: 'Science Events', icon: FiGrid, path: '/science/events' },
      { id: 'awards', label: 'Awards', icon: FiAward, path: '/science/awards' },
      { id: 'ai-initiatives', label: 'AI Initiatives', icon: FiDatabase, path: '/science/ai-initiatives' }
    ]
  },
  {
    id: 'innovation',
    label: 'Innovation',
    icon: FiGrid,
    path: '/innovation',
    children: [
      { id: 'challenges', label: 'Innovation Challenges', icon: FiAward, path: '/innovation/challenges' },
      { id: 'infrastructure', label: 'Infrastructure', icon: FiDatabase, path: '/innovation/infrastructure' }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: FiBook,
    path: '/resources',
    children: [
      { id: 'documents', label: 'Documents', icon: FiFileText, path: '/resources/documents' },
      { id: 'categories', label: 'Categories', icon: FiGrid, path: '/resources/categories' }
    ]
  },
  {
    id: 'procurement',
    label: 'Procurement & Careers',
    icon: FiBriefcase,
    path: '/procurement',
    children: [
      { id: 'bids', label: 'Procurement Bids', icon: FiClipboard, path: '/procurement/bids' },
      { id: 'vacancies', label: 'Vacancies', icon: FiUsers, path: '/procurement/vacancies' },
      { id: 'internships', label: 'Internship Programs', icon: FiUsers, path: '/procurement/internships' }
    ]
  },
  {
    id: 'metrics',
    label: 'Statistics & Metrics',
    icon: FiPieChart,
    path: '/metrics',
    children: [
      { id: 'impact', label: 'Impact Metrics', icon: FiPieChart, path: '/metrics/impact' },
      { id: 'research-stats', label: 'Research Stats', icon: FiPieChart, path: '/metrics/research' },
      { id: 'nsf-stats', label: 'NSF Statistics', icon: FiPieChart, path: '/metrics/nsf' }
    ]
  }
];

export const navigationConfig: NavigationConfig = {
  sections: [
    {
      title: 'Content',
      items: [
        { title: 'News Articles', path: '/news-articles' },
        { title: 'News Categories', path: '/news-categories' },
      ],
    },
    {
      title: 'Research',
      items: [
        { title: 'Research Permits', path: '/research/permits' },
        { title: 'Research Grants', path: '/research/grants' },
        { title: 'Research Statistics', path: '/research/statistics' },
      ],
    },
    {
      title: 'Science & Technology',
      items: [
        { title: 'Science Events', path: '/science/events' },
        { title: 'Awards', path: '/science/awards' },
        { title: 'AI Initiatives', path: '/science/ai-initiatives' },
      ],
    },
    {
      title: 'Innovation',
      items: [
        { title: 'Innovation Challenges', path: '/innovation/challenges' },
        { title: 'Infrastructure', path: '/innovation/infrastructure' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'Resource Categories', path: '/resources/categories' },
        { title: 'Documents', path: '/resources/documents' },
      ],
    },
    {
      title: 'Procurement & Careers',
      items: [
        { title: 'Procurement Bids', path: '/procurement/bids' },
        { title: 'Vacancies', path: '/careers/vacancies' },
        { title: 'Internship Programs', path: '/careers/internships' },
      ],
    },
    {
      title: 'Statistics',
      items: [
        { title: 'Impact Metrics', path: '/statistics/impact' },
        { title: 'NSF Statistics', path: '/statistics/nsf' },
      ],
    },
  ],
}; 