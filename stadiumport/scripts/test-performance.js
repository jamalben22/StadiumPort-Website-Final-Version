const { execSync } = require('child_process');

console.log('🚀 Building production version...');
execSync('npm run build', { stdio: 'inherit' });

console.log('\n✅ Build complete!');
console.log('\n📊 Next steps:');
console.log('1. Run: npm start');
console.log('2. Open: http://localhost:3000');
console.log('3. Run Lighthouse audit in Chrome DevTools');
console.log('4. Target scores: Performance 95+, SEO 100, Accessibility 95+\n');
