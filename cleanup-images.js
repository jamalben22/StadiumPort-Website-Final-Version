#!/usr/bin/env node

/**
 * Image Cleanup Script
 * 
 * This script identifies and deletes duplicate images while preserving:
 * 1. Original source images (base images without size suffixes)
 * 2. Actively used image variations (marked as true in imageVariantsManifest)
 * 3. Up to 3 most commonly used size variations per image
 * 
 * The system automatically generates size variants like:
 * - base-image.webp (original)
 * - base-image-640.webp 
 * - base-image-1024.webp
 * - base-image-1600.webp
 * - base-image-640-640.webp (complex variants)
 * 
 * This script removes the excessive auto-generated variants while keeping
 * the essential ones for responsive design.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the image variants manifest to know which images are actively used
// Since it's a TypeScript file, we'll read it directly and parse the data
const imageVariantsManifestPath = path.join(__dirname, 'src/utils/imageVariantsManifest.ts');
let imageVariantsManifest = {};

try {
  const manifestContent = fs.readFileSync(imageVariantsManifestPath, 'utf8');
  // Extract the manifest data from the TypeScript file
  const match = manifestContent.match(/export const imageVariantsManifest: Record<string, boolean> = \{([^}]+)\}/s);
  if (match) {
    const manifestData = match[1];
    // Parse the key-value pairs
    const lines = manifestData.split('\n').filter(line => line.trim() && line.includes('"'));
    lines.forEach(line => {
      const keyMatch = line.match(/"([^"]+)"\s*:\s*(true|false)/);
      if (keyMatch) {
        imageVariantsManifest[keyMatch[1]] = keyMatch[2] === 'true';
      }
    });
  }
} catch (error) {
  console.warn('⚠️  Could not load imageVariantsManifest.ts, using fallback logic');
  // Fallback: assume only the world-cup-2026-night-stadium images are active
  imageVariantsManifest = {};
}

// Base directories to clean up
const DIRECTORIES = [
  'public/images/cities',
  'public/images/stadiums', 
  'public/images'
];

// Common size variations to keep (in order of preference)
const PREFERRED_SIZES = ['640', '1024', '1600'];

// Track statistics
const stats = {
  totalFiles: 0,
  originalFiles: 0,
  activeVariants: 0,
  deletedFiles: 0,
  keptFiles: 0,
  errors: 0
};

/**
 * Check if a file should be kept based on the manifest
 */
function isActiveVariant(filePath) {
  const relativePath = filePath.replace(/\\/g, '/').replace('public', '');
  return imageVariantsManifest[relativePath] === true;
}

/**
 * Extract the base name from a file (remove size suffixes)
 * Examples:
 * - 'atlanta-world-cup-2026-1024-640.webp' -> 'atlanta-world-cup-2026'
 * - 'atlanta-world-cup-2026.webp' -> 'atlanta-world-cup-2026'
 */
function getBaseName(filename) {
  const nameWithoutExt = path.basename(filename, '.webp');
  
  // Remove common size patterns at the end
  // This handles patterns like: -640, -1024, -1600, -640-640, etc.
  const sizePattern = /(-\d+)+$/;
  const baseName = nameWithoutExt.replace(sizePattern, '');
  
  return baseName;
}

/**
 * Get the size variations from a filename
 * Examples:
 * - 'atlanta-world-cup-2026-1024-640.webp' -> ['1024', '640']
 * - 'atlanta-world-cup-2026.webp' -> []
 */
function getSizeVariations(filename) {
  const nameWithoutExt = path.basename(filename, '.webp');
  const baseName = getBaseName(filename);
  const sizePart = nameWithoutExt.replace(baseName, '');
  
  if (!sizePart) return [];
  
  // Extract all numbers from the size part
  const matches = sizePart.match(/\d+/g);
  return matches || [];
}

/**
 * Check if a file is an original (no size variations)
 */
function isOriginalFile(filename) {
  const variations = getSizeVariations(filename);
  return variations.length === 0;
}

/**
 * Check if a size variation should be kept
 */
function shouldKeepSizeVariation(variations) {
  if (variations.length === 0) return true; // Original file
  
  // For simple single-size variants, keep preferred sizes
  if (variations.length === 1) {
    return PREFERRED_SIZES.includes(variations[0]);
  }
  
  // For complex multi-size variants, be more selective
  // Keep only if it contains at least one preferred size
  return variations.some(v => PREFERRED_SIZES.includes(v));
}

/**
 * Process a single directory
 */
function processDirectory(dirPath) {
  console.log(`\n📁 Processing directory: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  const webpFiles = files.filter(f => f.endsWith('.webp'));
  
  console.log(`📊 Found ${webpFiles.length} WEBP files`);
  
  // Group files by base name
  const fileGroups = {};
  
  for (const file of webpFiles) {
    const baseName = getBaseName(file);
    if (!fileGroups[baseName]) {
      fileGroups[baseName] = [];
    }
    fileGroups[baseName].push(file);
  }
  
  console.log(`📋 Found ${Object.keys(fileGroups).length} unique image groups`);
  
  // Process each group
  for (const [baseName, files] of Object.entries(fileGroups)) {
    processFileGroup(dirPath, baseName, files);
  }
}

/**
 * Process a group of files with the same base name
 */
function processFileGroup(dirPath, baseName, files) {
  const originalFile = files.find(f => isOriginalFile(f));
  const variantFiles = files.filter(f => !isOriginalFile(f));
  
  console.log(`\n🖼️  Processing group: ${baseName}`);
  console.log(`   Total files: ${files.length}`);
  console.log(`   Original: ${originalFile ? '✅' : '❌'}`);
  console.log(`   Variants: ${variantFiles.length}`);
  
  // Keep track of files to delete
  const filesToDelete = [];
  const filesToKeep = [];
  
  // Always keep the original file if it exists
  if (originalFile) {
    filesToKeep.push(originalFile);
    stats.originalFiles++;
  }
  
  // Process variant files
  for (const file of variantFiles) {
    const filePath = path.join(dirPath, file);
    const relativePath = filePath.replace(/\\/g, '/').replace('public', '');
    
    // Check if this is an active variant from the manifest
    if (isActiveVariant(filePath)) {
      filesToKeep.push(file);
      stats.activeVariants++;
      console.log(`   🎯 Keeping active variant: ${file}`);
      continue;
    }
    
    // Check if this size variation should be kept
    const variations = getSizeVariations(file);
    if (shouldKeepSizeVariation(variations)) {
      filesToKeep.push(file);
      console.log(`   ✅ Keeping size variant: ${file}`);
      continue;
    }
    
    // Mark for deletion
    filesToDelete.push(file);
  }
  
  // Ensure we keep at least 3 files per group (original + 2 variants)
  if (filesToKeep.length < 3 && filesToDelete.length > 0) {
    const needed = 3 - filesToKeep.length;
    const additionalToKeep = filesToDelete.splice(0, needed);
    filesToKeep.push(...additionalToKeep);
    console.log(`   📏 Keeping additional ${additionalToKeep.length} files to maintain minimum`);
  }
  
  // Delete marked files
  for (const file of filesToDelete) {
    const filePath = path.join(dirPath, file);
    try {
      console.log(`   🗑️  Deleting: ${file}`);
      fs.unlinkSync(filePath);
      stats.deletedFiles++;
    } catch (error) {
      console.error(`   ❌ Error deleting ${file}:`, error.message);
      stats.errors++;
    }
  }
  
  stats.keptFiles += filesToKeep.length;
  
  console.log(`   Summary: Kept ${filesToKeep.length}, Deleted ${filesToDelete.length}`);
}

/**
 * Main execution function
 */
function main() {
  console.log('🚀 Starting Image Cleanup Process');
  console.log('=====================================');
  
  // Check if we're in the right directory
  if (!fs.existsSync('public') || !fs.existsSync('src')) {
    console.error('❌ Error: Please run this script from the project root directory');
    process.exit(1);
  }
  
  // Process each directory
  for (const dir of DIRECTORIES) {
    processDirectory(dir);
  }
  
  // Print final statistics
  console.log('\n📊 Cleanup Complete!');
  console.log('====================');
  console.log(`Total files processed: ${stats.totalFiles}`);
  console.log(`Original files kept: ${stats.originalFiles}`);
  console.log(`Active variants kept: ${stats.activeVariants}`);
  console.log(`Total files kept: ${stats.keptFiles}`);
  console.log(`Files deleted: ${stats.deletedFiles}`);
  console.log(`Errors: ${stats.errors}`);
  
  if (stats.errors > 0) {
    console.log('\n⚠️  Some errors occurred during cleanup. Please review the output above.');
    process.exit(1);
  } else {
    console.log('\n✅ Cleanup completed successfully!');
  }
}

// Run the script
main();

export {
  getBaseName,
  getSizeVariations,
  isOriginalFile,
  shouldKeepSizeVariation,
  isActiveVariant
};