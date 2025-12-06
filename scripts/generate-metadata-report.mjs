
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
  
  const seoMatch = content.match(/<SEO\s+([^>]+)\/?>/);
  
  if (!seoMatch) return { title: 'MISSING', description: 'MISSING' };
  
  const propsString = seoMatch[1];
  
  const titleMatch = propsString.match(/title=(?:\{`([^`]+)`\}|\{"([^"]+)"\}|"([^"]+)"|'([^']+)')/);
  const descMatch = propsString.match(/description=(?:\{`([^`]+)`\}|\{"([^"]+)"\}|"([^"]+)"|'([^']+)')/);
  
  const title = titleMatch ? (titleMatch[1] || titleMatch[2] || titleMatch[3] || titleMatch[4]) : 'MISSING';
  const description = descMatch ? (descMatch[1] || descMatch[2] || descMatch[3] || descMatch[4]) : 'MISSING';
  
  return { title, description };
}

function generateOptimized(route, currentTitle, currentDescription) {
  let optTitle = currentTitle;
  let optDesc = currentDescription;

  if (route === '/') {
    optTitle = 'World Cup 2026 Travel Guide | Host Cities, Stadiums & Tickets';
    optDesc = 'The ultimate guide to FIFA World Cup 2026. Explore all 16 host cities, stadium guides, match schedules, travel tips, and safety advice for USA, Canada, and Mexico.';
  } else if (route.includes('/world-cup-2026-stadiums/')) {
    const stadium = route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    optTitle = `${stadium} Guide - World Cup 2026 | Seating, Hotels & Parking`;
    optDesc = `Complete guide to ${stadium} for World Cup 2026. Find best seats, nearby hotels, transportation, parking tips, and stadium safety information.`;
  } else if (route.includes('/world-cup-2026-host-cities/')) {
    const city = route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    optTitle = `${city} World Cup 2026 Travel Guide | Host City Tips & Safety`;
    optDesc = `Plan your trip to ${city} for World Cup 2026. Best areas to stay, top attractions, public transportation, fan zones, and local safety guide.`;
  } else if (route.includes('/groups/')) {
    const group = route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    optTitle = `World Cup 2026 ${group} | Standings, Schedule & Travel Guide`;
    optDesc = `Follow ${group} in World Cup 2026. Match schedule, venue information, team analysis, and travel logistics for all group stage games.`;
  }

  return { optTitle, optDesc };
}

function main() {
  const pagesDir = path.join(srcDir, 'pages');
  const files = walk(pagesDir);
  
  const header = 'URL,Current Title,Optimized Title,Current Description,Optimized Description\n';
  let csvContent = header;
  
  for (const file of files) {
    const relativePath = path.relative(pagesDir, file);
    let route = relativePath
      .replace(/\\/g, '/')
      .replace(/\/page\.tsx$/, '')
      .replace(/\/index\.tsx$/, '')
      .replace(/\.tsx$/, '');
      
    if (route === 'home') route = '/';
    else route = '/' + route;
    
    // Skip dynamic routes for static analysis if needed, or keep them as templates
    
    const { title, description } = extractMetadata(file);
    const { optTitle, optDesc } = generateOptimized(route, title, description);
    
    // Escape quotes for CSV
    const escape = (s) => `"${(s || '').replace(/"/g, '""')}"`;
    
    csvContent += `${escape(route)},${escape(title)},${escape(optTitle)},${escape(description)},${escape(optDesc)}\n`;
  }
  
  const out = path.join(projectRoot, 'metadata_optimization_report.csv');
  fs.writeFileSync(out, csvContent);
  console.log('Metadata report generated:', out);
}

main();
