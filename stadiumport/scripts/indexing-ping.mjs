import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log('Starting IndexNow submission...');

  const host = 'stadiumport.com';
  const keyFile = 'bcc2ab42723d47a2967cf7f3cc58125f.txt';
  const keyPath = path.join(__dirname, '../public', keyFile);
  
  if (!fs.existsSync(keyPath)) {
    console.error(`Key file not found at ${keyPath}`);
    process.exit(1);
  }

  const key = fs.readFileSync(keyPath, 'utf8').trim();
  const keyLocation = `https://${host}/${keyFile}`;

  // Extract routes from src/data/routes.ts
  const routesPath = path.join(__dirname, '../src/data/routes.ts');
  const routesContent = fs.readFileSync(routesPath, 'utf8');
  
  const staticRoutesMatch = routesContent.match(/export const STATIC_ROUTES = \[([\s\S]*?)\];/);
  const staticRoutes = staticRoutesMatch 
    ? staticRoutesMatch[1]
        .split(',')
        .map(r => r.trim().replace(/['"]/g, ''))
        .filter(r => r && !r.startsWith('//'))
    : [];

  const groupsMatch = routesContent.match(/export const GROUPS = \[([\s\S]*?)\];/);
  const groups = groupsMatch
    ? groupsMatch[1]
        .split(',')
        .map(g => g.trim().replace(/['"]/g, ''))
        .filter(g => g && !g.startsWith('//'))
    : [];

  const allUrls = [
    ...staticRoutes.map(r => `https://${host}${r}`),
    ...groups.map(g => `https://${host}/world-cup-2026-groups/group-${g}`)
  ];

  console.log(`Submitting ${allUrls.length} URLs to IndexNow...`);

  const payload = {
    host,
    key,
    keyLocation,
    urlList: allUrls
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Successfully submitted to IndexNow');
    } else {
      const text = await response.text();
      console.error(`Failed to submit to IndexNow: ${response.status} ${response.statusText}`);
      console.error(text);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error during IndexNow submission:', error);
    process.exit(1);
  }
}

main();
