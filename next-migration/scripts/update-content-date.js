const fs = require('fs');
const path = require('path');

// Usage: node scripts/update-content-date.js <slug> [wordCount]

const args = process.argv.slice(2);
const slug = args[0];
const wordCount = args[1] ? parseInt(args[1], 10) : null;

if (!slug) {
  console.error('Please provide a slug as the first argument.');
  console.log('Usage: node scripts/update-content-date.js <slug> [wordCount]');
  console.log('Example: node scripts/update-content-date.js atlanta-city-guide 4300');
  process.exit(1);
}

const registryPath = path.join(__dirname, '../src/data/content-registry.ts');

try {
  let content = fs.readFileSync(registryPath, 'utf8');
  
  // Regex to find the object for the specific slug
  // Looking for: 'slug': { ... }
  // We want to find the updatedAt: '...' line inside it
  
  const slugRegex = new RegExp(`('${slug}':\\s*\\{[^}]*?)updatedAt:\\s*'[^']*'`, 's');
  
  if (!slugRegex.test(content)) {
    console.error(`Slug "${slug}" not found in registry.`);
    process.exit(1);
  }
  
  const now = new Date().toISOString();
  
  // Update updatedAt
  content = content.replace(slugRegex, (match, p1) => {
    return `${p1}updatedAt: '${now}'`;
  });
  
  // Update wordCount if provided
  if (wordCount) {
     const wordCountRegex = new RegExp(`('${slug}':\\s*\\{[^}]*?)wordCount:\\s*\\d+`, 's');
     if (wordCountRegex.test(content)) {
        content = content.replace(wordCountRegex, (match, p1) => {
          return `${p1}wordCount: ${wordCount}`;
        });
     } else {
        // If wordCount doesn't exist, insert it before updatedAt or at end of object?
        // Simpler to just assume it exists or rely on manual add if missing for now to keep regex simple
        // or insert it after updatedAt which we just updated.
        // Let's keep it simple: only update if exists, or warn.
        console.warn('WordCount update only supported if property already exists. Please add it manually if missing.');
     }
  }

  fs.writeFileSync(registryPath, content, 'utf8');
  console.log(`Successfully updated "updatedAt" for "${slug}" to ${now}`);
  if (wordCount) console.log(`Updated wordCount to ${wordCount}`);

} catch (err) {
  console.error('Error updating registry:', err);
  process.exit(1);
}
