
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.isFile() && /\.(tsx|jsx)$/.test(e.name)) out.push(full);
  }
  return out;
}

function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for SEO component usage
  // <SEO title="..." description="..." ... />
  const seoMatch = content.match(/<SEO\s+([^>]+)\/?>/);
  
  if (!seoMatch) return null;
  
  const propsString = seoMatch[1];
  
  // Simple regex to extract props - this is not a full parser but should work for most cases
  const titleMatch = propsString.match(/title=(?:\{`([^`]+)`\}|\{"([^"]+)"\}|"([^"]+)"|'([^']+)')/);
  const descMatch = propsString.match(/description=(?:\{`([^`]+)`\}|\{"([^"]+)"\}|"([^"]+)"|'([^']+)')/);
  
  const title = titleMatch ? (titleMatch[1] || titleMatch[2] || titleMatch[3] || titleMatch[4]) : 'MISSING';
  const description = descMatch ? (descMatch[1] || descMatch[2] || descMatch[3] || descMatch[4]) : 'MISSING';
  
  return { title, description };
}

function main() {
  const pagesDir = path.join(srcDir, 'pages');
  const files = walk(pagesDir);
  
  const results = [];
  
  console.log('URL | Current Title | Optimized Title | Current Description | Optimized Description');
  
  for (const file of files) {
    const relativePath = path.relative(pagesDir, file);
    // Convert file path to route
    let route = relativePath
      .replace(/\\/g, '/')
      .replace(/\/page\.tsx$/, '')
      .replace(/\/index\.tsx$/, '')
      .replace(/\.tsx$/, '');
      
    if (route === 'home') route = '/';
    else route = '/' + route;
    
    // Handle dynamic routes [param]
    route = route.replace(/\[([^\]]+)\]/g, ':$1');
    
    const metadata = extractMetadata(file);
    
    if (metadata) {
      results.push({
        url: route,
        currentTitle: metadata.title,
        currentDescription: metadata.description
      });
      console.log(`${route} | ${metadata.title} | [TODO] | ${metadata.description} | [TODO]`);
    }
  }
  
  // Also output to a file
  fs.writeFileSync(path.join(projectRoot, 'metadata-audit.json'), JSON.stringify(results, null, 2));
}

main();
