import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const imagesDir = path.join(projectRoot, 'public', 'images');

const TARGETS = [
  { width: 640, suffix: '-640.webp', quality: 78 },
  { width: 1024, suffix: '-1024.webp', quality: 80 },
  { width: 1600, suffix: '-1600.webp', quality: 82 },
];

async function ensureVariant(srcPath, destPath, width, quality) {
  if (fs.existsSync(destPath)) return false; // already exists
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destPath);
  return true;
}

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) return { created: 0 };

  const baseName = path.basename(file, ext);
  const srcPath = path.join(imagesDir, file);
  let created = 0;

  for (const t of TARGETS) {
    const destName = `${baseName}${t.suffix}`;
    const destPath = path.join(imagesDir, destName);
    const made = await ensureVariant(srcPath, destPath, t.width, t.quality);
    if (made) created += 1;
  }

  return { created };
}

async function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir);
    process.exit(1);
  }

  const entries = fs.readdirSync(imagesDir, { withFileTypes: true });
  const files = entries.filter(e => e.isFile()).map(e => e.name);

  let totalCreated = 0;
  for (const file of files) {
    const { created } = await processImage(file);
    totalCreated += created;
  }

  console.log(`Generated ${totalCreated} variants across ${files.length} source images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});