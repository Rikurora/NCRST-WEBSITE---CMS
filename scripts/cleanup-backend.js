#!/usr/bin/env node

/**
 * Backend Cleanup Script
 * 
 * This script removes problematic composer.lock file and other cached files
 * to ensure a fresh installation with compatible packages.
 */

const fs = require('fs');
const path = require('path');

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

function removeFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      log(`✅ Removed: ${filePath}`, colors.green);
      return true;
    } else {
      log(`ℹ️  Not found: ${filePath}`, colors.blue);
      return false;
    }
  } catch (error) {
    log(`❌ Failed to remove ${filePath}: ${error.message}`, colors.red);
    return false;
  }
}

function removeDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
      log(`✅ Removed directory: ${dirPath}`, colors.green);
      return true;
    } else {
      log(`ℹ️  Directory not found: ${dirPath}`, colors.blue);
      return false;
    }
  } catch (error) {
    log(`❌ Failed to remove ${dirPath}: ${error.message}`, colors.red);
    return false;
  }
}

function cleanupBackend() {
  log(`${colors.bold}🧹 Backend Cleanup Script${colors.reset}\n`);
  
  const backendPath = path.join(process.cwd(), 'Backend', 'website-backend');
  
  if (!fs.existsSync(backendPath)) {
    log(`❌ Backend directory not found: ${backendPath}`, colors.red);
    return false;
  }
  
  log(`Cleaning up backend at: ${backendPath}\n`, colors.blue);
  
  // Files to remove
  const filesToRemove = [
    path.join(backendPath, 'composer.lock'),
    path.join(backendPath, '.env.local'),
    path.join(backendPath, '.env.local.php')
  ];
  
  // Directories to remove
  const directoriesToRemove = [
    path.join(backendPath, 'vendor'),
    path.join(backendPath, 'var', 'cache'),
    path.join(backendPath, 'var', 'log')
  ];
  
  let removedFiles = 0;
  let removedDirs = 0;
  
  // Remove files
  log(`${colors.bold}Removing files:${colors.reset}`);
  filesToRemove.forEach(filePath => {
    if (removeFile(filePath)) {
      removedFiles++;
    }
  });
  
  // Remove directories
  log(`\n${colors.bold}Removing directories:${colors.reset}`);
  directoriesToRemove.forEach(dirPath => {
    if (removeDirectory(dirPath)) {
      removedDirs++;
    }
  });
  
  // Summary
  log(`\n${colors.bold}📊 Cleanup Summary:${colors.reset}`);
  log(`Files removed: ${removedFiles}/${filesToRemove.length}`);
  log(`Directories removed: ${removedDirs}/${directoriesToRemove.length}`);
  
  if (removedFiles > 0 || removedDirs > 0) {
    log(`\n🎉 Cleanup completed! Ready for fresh installation.`, colors.green);
  } else {
    log(`\nℹ️  No cleanup needed - files were already clean.`, colors.blue);
  }
  
  log(`\n${colors.bold}💡 Next steps:${colors.reset}`);
  log(`1. Run: npm run setup`);
  log(`2. Or run: npm run backend:fresh`);
  
  return true;
}

// Handle script execution
if (require.main === module) {
  cleanupBackend();
}

module.exports = { cleanupBackend }; 