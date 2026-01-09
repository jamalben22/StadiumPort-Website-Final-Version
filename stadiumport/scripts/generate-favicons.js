const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_SVG = path.join(__dirname, '../public/images/Logos/stadiumport-mobile-logo-light.svg');
const OUTPUT_DIR = path.join(__dirname, '../public/images/Logos/favicon');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Google recommends multiples of 48px
// Apple wants 180x180
// Standard favicons: 16, 32
// Android/PWA: 192, 512

const SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 }, // Google minimum
  { name: 'favicon-96x96.png', size: 96 }, // Google 2x
  { name: 'favicon-144x144.png', size: 144 }, // Google 3x
  { name: 'apple-touch-icon.png', size: 180 }, // Apple
  { name: 'android-chrome-192x192.png', size: 192 }, // PWA
  { name: 'android-chrome-512x512.png', size: 512 }, // PWA High Res
];

async function generateIcons() {
  console.log(`Generating icons from ${SOURCE_SVG}...`);

  for (const config of SIZES) {
    try {
      // For SVGs, we need to set density to ensure high quality resize when scaling up
      // 72dpi is standard. If we want 512px from 180px base, we need density ~ 72 * (512/180) approx 205
      // But simpler is to just load it with a high density.
      
      const density = 72 * (config.size / 180) * 2; // *2 for good measure

      await sharp(SOURCE_SVG, { density: Math.max(72, density) })
        .resize(config.size, config.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background if SVG allows, but SVG has green bg
        })
        .png()
        .toFile(path.join(OUTPUT_DIR, config.name));

      console.log(`Generated ${config.name}`);
    } catch (error) {
      console.error(`Error generating ${config.name}:`, error);
    }
  }

  // Generate favicon.ico (multi-size)
  // Sharp doesn't directly support .ico easily with multiple layers in one go without plugins sometimes,
  // but we can try to save 32x32 as .ico or use a library. 
  // However, modern browsers support PNG favicons. IE is dead. 
  // But for compatibility, we can just copy the 32x32 png to favicon.ico or 48x48.
  // Actually, let's just use the 48x48 png as favicon.ico if possible, or just skip .ico if we rely on <link rel="icon" ...>
  // But standard practice is to have a favicon.ico.
  // We'll stick to PNGs and update HTML.
  
  console.log('Done.');
}

generateIcons();
