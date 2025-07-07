import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/common/Sidebar';
import { navigation } from './config/navigation';
import { ResearchPermitsPage } from './pages/research/ResearchPermitsPage';
import { ResearchGrantsPage } from './pages/research/ResearchGrantsPage';
import { ScienceEventsPage } from './pages/science/ScienceEventsPage';
import { AwardsPage } from './pages/science/AwardsPage';
import { AiInitiativesPage } from './pages/science/AiInitiativesPage';
import { ResourceCategoriesPage } from './pages/resources/ResourceCategoriesPage';
import { DocumentsPage } from './pages/resources/DocumentsPage';
import { ProcurementBidsPage } from './pages/procurement/ProcurementBidsPage';
import { VacanciesPage } from './pages/careers/VacanciesPage';
import { InternshipProgramsPage } from './pages/careers/InternshipProgramsPage';
import { NewsArticlesPage } from './pages/content/news/NewsArticlesPage';
import { NewsCategoriesPage } from './pages/content/news/NewsCategoriesPage';
import ImpactMetricsPage from './pages/metrics/ImpactMetricsPage';
import NSFStatisticsPage from './pages/metrics/NSFStatisticsPage';

const DashboardPage: React.FC = () => (
  <Box>
    <Heading mb={4}>Welcome to NCRST CMS</Heading>
    <Text>Select an item from the sidebar to manage content.</Text>
  </Box>
);

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <ChakraProvider>
      <Router>
        <Flex h="100vh">
          <Sidebar 
            navigation={navigation} 
            currentView={currentView}
            onViewChange={setCurrentView}
          />
          <Box flex="1" p={4} overflowY="auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="/content/news/articles" element={<NewsArticlesPage />} />
              <Route path="/content/news/categories" element={<NewsCategoriesPage />} />
              <Route path="/research/permits" element={<ResearchPermitsPage />} />
              <Route path="/research/grants" element={<ResearchGrantsPage />} />
              <Route path="/science/events" element={<ScienceEventsPage />} />
              <Route path="/science/awards" element={<AwardsPage />} />
              <Route path="/science/ai-initiatives" element={<AiInitiativesPage />} />
              <Route path="/resources/categories" element={<ResourceCategoriesPage />} />
              <Route path="/resources/documents" element={<DocumentsPage />} />
              <Route path="/procurement/bids" element={<ProcurementBidsPage />} />
              <Route path="/careers/vacancies" element={<VacanciesPage />} />
              <Route path="/careers/internships" element={<InternshipProgramsPage />} />
              <Route path="/metrics/impact" element={<ImpactMetricsPage />} />
              <Route path="/metrics/nsf" element={<NSFStatisticsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};