const fs = require('fs');
const path = require('path');

const targetPath = process.argv[2];
if (!targetPath) {
  console.error('Please provide a file or directory path');
  process.exit(1);
}

function transformFile(filePath) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) return;
  
  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(fullPath);
    files.forEach(file => {
      transformFile(path.join(fullPath, file));
    });
    return;
  }
  
  if (!fullPath.endsWith('.tsx') && !fullPath.endsWith('.jsx')) return;

  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  // Replace import
  content = content.replace(
    /import\s+{\s*OptimizedImage\s*}\s+from\s+['"][^'"]+['"];?/g,
    "import Image from 'next/image';"
  );

  // Replace OptimizedImage usage
  content = content.replace(/<OptimizedImage([^>]+)\/>/g, (match, props) => {
    // Extract props
    const srcMatch = props.match(/src={?["']([^"'}]+)["']}?/);
    const altMatch = props.match(/alt={?["']([^"'}]+)["']}?/);
    const widthMatch = props.match(/width={?(\d+)}?/);
    const heightMatch = props.match(/height={?(\d+)}?/);
    const priorityMatch = props.match(/priority={?([^}]+)}?/);
    const classNameMatch = props.match(/className={?["']([^"'}]+)["']}?/);
    const imgClassNameMatch = props.match(/imgClassName={?["']([^"'}]+)["']}?/);
    const sizesMatch = props.match(/sizes={?["']([^"'}]+)["']}?/);

    let className = '';
    if (classNameMatch) className += classNameMatch[1] + ' ';
    if (imgClassNameMatch) className += imgClassNameMatch[1];
    className = className.trim();

    let output = '<Image';
    if (srcMatch) output += ` src="${srcMatch[1]}"`;
    if (altMatch) output += ` alt="${altMatch[1]}"`;
    if (widthMatch) output += ` width={${widthMatch[1]}}`;
    if (heightMatch) output += ` height={${heightMatch[1]}}`;
    if (className) output += ` className="${className}"`;
    if (priorityMatch) output += ` priority={${priorityMatch[1]}}`;
    if (sizesMatch) output += ` sizes="${sizesMatch[1]}"`;
    
    output += ' />';
    return output;
  });

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    console.log(`Transformed ${fullPath}`);
  }
}

transformFile(targetPath);
