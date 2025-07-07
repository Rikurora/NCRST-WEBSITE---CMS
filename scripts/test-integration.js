#!/usr/bin/env node

/**
 * Integration Test Script for NCRST Monorepo
 * 
 * This script tests the connection between frontend and backend
 * and verifies that the API integration is working correctly.
 */

const http = require('http');
const https = require('https');

const BACKEND_URL = 'http://localhost:8001';
const FRONTEND_CMS_URL = 'http://localhost:5173';
const FRONTEND_WEBSITE_URL = 'http://localhost:5174';

// Color codes for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function makeRequest(url, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const timer = setTimeout(() => {
      reject(new Error('Request timeout'));
    }, timeout);

    const req = client.get(url, (res) => {
      clearTimeout(timer);
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data,
          headers: res.headers
        });
      });
    });

    req.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

async function testEndpoint(name, url, expectedStatus = 200) {
  try {
    log(`Testing ${name}...`, colors.blue);
    const response = await makeRequest(url);
    
    if (response.statusCode === expectedStatus) {
      log(`✅ ${name}: OK (${response.statusCode})`, colors.green);
      return true;
    } else {
      log(`⚠️  ${name}: Unexpected status ${response.statusCode}`, colors.yellow);
      return false;
    }
  } catch (error) {
    log(`❌ ${name}: ${error.message}`, colors.red);
    return false;
  }
}

async function testApiEndpoint(endpoint) {
  const url = `${BACKEND_URL}/api${endpoint}`;
  return await testEndpoint(`API ${endpoint}`, url);
}

async function runTests() {
  log(`${colors.bold}🧪 NCRST Integration Test Suite${colors.reset}\n`);
  
  const results = {
    backend: [],
    api: [],
    frontend: []
  };

  // Test Backend Services
  log(`${colors.bold}🔧 Testing Backend Services:${colors.reset}`);
  results.backend.push(await testEndpoint('Backend Health', `${BACKEND_URL}/`));
  results.backend.push(await testEndpoint('API Platform', `${BACKEND_URL}/api`));
  
  // Test API Endpoints
  log(`\n${colors.bold}📡 Testing API Endpoints:${colors.reset}`);
  const apiEndpoints = [
    '/news_articles',
    '/science_events',
    '/councils',
    '/council_members',
    '/board_commissioners',
    '/research_grants',
    '/innovation_challenges',
    '/vacancies',
    '/resources'
  ];

  for (const endpoint of apiEndpoints) {
    results.api.push(await testApiEndpoint(endpoint));
  }

  // Test Frontend Services
  log(`\n${colors.bold}🌐 Testing Frontend Services:${colors.reset}`);
  results.frontend.push(await testEndpoint('CMS Frontend', FRONTEND_CMS_URL));
  results.frontend.push(await testEndpoint('Website Frontend', FRONTEND_WEBSITE_URL));

  // Test CORS
  log(`\n${colors.bold}🔒 Testing CORS Configuration:${colors.reset}`);
  try {
    const response = await makeRequest(`${BACKEND_URL}/api/news_articles`);
    const corsHeaders = {
      'access-control-allow-origin': response.headers['access-control-allow-origin'],
      'access-control-allow-methods': response.headers['access-control-allow-methods'],
      'access-control-allow-headers': response.headers['access-control-allow-headers']
    };
    
    if (corsHeaders['access-control-allow-origin']) {
      log(`✅ CORS: Headers present`, colors.green);
      log(`   Origin: ${corsHeaders['access-control-allow-origin']}`);
      log(`   Methods: ${corsHeaders['access-control-allow-methods'] || 'Not specified'}`);
      results.backend.push(true);
    } else {
      log(`⚠️  CORS: Headers missing`, colors.yellow);
      results.backend.push(false);
    }
  } catch (error) {
    log(`❌ CORS: Test failed - ${error.message}`, colors.red);
    results.backend.push(false);
  }

  // Summary
  log(`\n${colors.bold}📊 Test Results Summary:${colors.reset}`);
  
  const backendPassed = results.backend.filter(Boolean).length;
  const backendTotal = results.backend.length;
  const apiPassed = results.api.filter(Boolean).length;
  const apiTotal = results.api.length;
  const frontendPassed = results.frontend.filter(Boolean).length;
  const frontendTotal = results.frontend.length;
  
  log(`Backend Services: ${backendPassed}/${backendTotal} passed`);
  log(`API Endpoints: ${apiPassed}/${apiTotal} passed`);
  log(`Frontend Services: ${frontendPassed}/${frontendTotal} passed`);
  
  const totalPassed = backendPassed + apiPassed + frontendPassed;
  const totalTests = backendTotal + apiTotal + frontendTotal;
  
  if (totalPassed === totalTests) {
    log(`\n🎉 All tests passed! Integration is working correctly.`, colors.green);
  } else if (totalPassed > totalTests * 0.7) {
    log(`\n⚠️  Most tests passed, but some issues found.`, colors.yellow);
  } else {
    log(`\n❌ Multiple tests failed. Check your setup.`, colors.red);
  }

  // Provide helpful suggestions
  log(`\n${colors.bold}💡 Quick Fixes:${colors.reset}`);
  
  if (backendPassed < backendTotal) {
    log(`• Start backend: npm run backend:up`);
    log(`• Check backend logs: npm run backend:logs`);
  }
  
  if (apiPassed < apiTotal) {
    log(`• Verify database is running and migrated`);
    log(`• Check API documentation: http://localhost:8001/api`);
  }
  
  if (frontendPassed < frontendTotal) {
    log(`• Start frontend: npm run dev:frontend`);
    log(`• Check if ports 5173 and 5174 are available`);
  }

  log(`\n${colors.bold}🔗 Useful Links:${colors.reset}`);
  log(`• Backend API: ${BACKEND_URL}/api`);
  log(`• PHPMyAdmin: http://localhost:8081`);
  log(`• CMS: ${FRONTEND_CMS_URL}`);
  log(`• Website: ${FRONTEND_WEBSITE_URL}`);
  
  process.exit(totalPassed === totalTests ? 0 : 1);
}

// Handle script execution
if (require.main === module) {
  runTests().catch(error => {
    log(`❌ Test runner failed: ${error.message}`, colors.red);
    process.exit(1);
  });
}

module.exports = { runTests, testEndpoint, testApiEndpoint }; 