#!/usr/bin/env node

/**
 * Dependency Checker Script
 * 
 * This script checks if all dependencies listed in package.json
 * are actually installed in node_modules. If any are missing,
 * it will install them automatically.
 * 
 * This prevents build errors when new components are added that
 * use packages that are in package.json but not installed.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(process.cwd(), 'package.json');
const nodeModulesPath = path.join(process.cwd(), 'node_modules');

// Read package.json
if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json not found');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

// Check if node_modules exists
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 node_modules not found. Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  process.exit(0);
}

// Check each dependency
const missingDeps = [];
const depsToCheck = Object.keys(allDeps);

for (const dep of depsToCheck) {
  const depPath = path.join(nodeModulesPath, dep);
  if (!fs.existsSync(depPath)) {
    missingDeps.push(dep);
  }
}

if (missingDeps.length > 0) {
  console.log(`⚠️  Missing ${missingDeps.length} dependency/dependencies:`);
  missingDeps.forEach(dep => console.log(`   - ${dep}`));
  console.log('\n📦 Installing missing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully!');
} else {
  console.log('✅ All dependencies are installed.');
}

