const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2];

if (!targetDir) {
  console.error('Please provide a target directory.');
  process.exit(1);
}

const absoluteTargetDir = path.resolve(process.cwd(), targetDir);

function processDirectory(directory) {
  if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`);
    return;
  }

  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = false;

      // Replace OptimizedImage import with next/image
      if (content.includes("import OptimizedImage from '@/components/ui/OptimizedImage';")) {
        content = content.replace(
          "import OptimizedImage from '@/components/ui/OptimizedImage';",
          "import Image from 'next/image';"
        );
        updated = true;
      }

      // Replace OptimizedImage usage with Image
      if (content.includes('<OptimizedImage')) {
        content = content.replace(/<OptimizedImage/g, '<Image');
        updated = true;
      }

      if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

processDirectory(absoluteTargetDir);
