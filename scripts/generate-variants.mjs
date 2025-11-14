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
  if (fs.existsSync(destPath)) return false;
  try {
    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(destPath);
    return true;
  } catch (e) {
    console.error('Variant generation failed for', srcPath, '->', destPath);
    return false;
  }
}

async function processImage(srcPath) {
  const ext = path.extname(srcPath).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) return { created: 0 };

  const baseName = path.basename(srcPath, ext);
  const dirName = path.dirname(srcPath);
  let created = 0;

  for (const t of TARGETS) {
    const destName = `${baseName}${t.suffix}`;
    const destPath = path.join(dirName, destName);
    const made = await ensureVariant(srcPath, destPath, t.width, t.quality);
    if (made) created += 1;
  }

  return { created };
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...walkDir(full));
    } else if (e.isFile()) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir);
    process.exit(1);
  }

  const files = walkDir(imagesDir);
  let totalCreated = 0;
  for (const srcPath of files) {
    const { created } = await processImage(srcPath);
    totalCreated += created;
  }

  console.log(`Generated ${totalCreated} variants across ${files.length} source images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
