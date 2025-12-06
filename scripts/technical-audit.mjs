
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
    else if (e.isFile()) out.push(full);
  }
  return out;
}

function audit() {
  const issues = [];
  
  // 1. Check index.html for viewport
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
  if (!indexHtml.includes('<meta name="viewport"')) {
    issues.push('CRITICAL: Missing viewport meta tag in index.html');
  } else if (!indexHtml.includes('width=device-width')) {
    issues.push('WARNING: Viewport meta tag might be incorrect');
  }
  
  // 2. Check for raw <img> tags
  const tsxFiles = walk(srcDir).filter(f => /\.(tsx|jsx)$/.test(f));
  let imgTagCount = 0;
  for (const f of tsxFiles) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/<img\s/g);
    if (matches) {
      imgTagCount += matches.length;
      // issues.push(`WARNING: Raw <img> tag found in ${path.relative(projectRoot, f)}`);
    }
  }
  if (imgTagCount > 0) {
    issues.push(`WARNING: Found ${imgTagCount} raw <img> tags. Should use <OptimizedImage> or <img loading="lazy">.`);
  }
  
  // 3. Check vercel.json for headers
  const vercelJsonPath = path.join(projectRoot, 'vercel.json');
  if (fs.existsSync(vercelJsonPath)) {
    const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
    if (!vercelJson.headers) {
      issues.push('WARNING: No security headers defined in vercel.json');
    }
  } else {
    issues.push('INFO: vercel.json not found. Ensure security headers are configured in deployment.');
  }
  
  // 4. Check for large images in public
  const publicDir = path.join(projectRoot, 'public');
  const publicFiles = walk(publicDir);
  for (const f of publicFiles) {
    const stat = fs.statSync(f);
    if (stat.size > 500 * 1024 && /\.(png|jpg|jpeg)$/.test(f)) {
      issues.push(`PERFORMANCE: Large image found: ${path.relative(projectRoot, f)} (${(stat.size / 1024).toFixed(0)}KB). Should be WebP and compressed.`);
    }
  }
  
  // Output report
  const report = `TECHNICAL SEO AUDIT REPORT
==========================
Date: ${new Date().toISOString()}

ISSUES FOUND:
${issues.map((i, idx) => `${idx + 1}. ${i}`).join('\n')}

SUMMARY:
- Total Issues: ${issues.length}
`;

  const out = path.join(projectRoot, 'technical_seo_audit.txt');
  fs.writeFileSync(out, report);
  console.log('Technical audit report generated:', out);
}

audit();
