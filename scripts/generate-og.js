const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <text x="50%" y="42%" font-family="Arial, sans-serif" font-size="72" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" font-weight="bold">Alejandro Olaso</text>
  <text x="50%" y="58%" font-family="Arial, sans-serif" font-size="40" fill="#94a3b8" text-anchor="middle" dominant-baseline="middle">Full-Stack Developer</text>
  <text x="50%" y="72%" font-family="Arial, sans-serif" font-size="26" fill="#64748b" text-anchor="middle" dominant-baseline="middle">Angular · Node.js · Cloud · B2B · AI</text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => console.log('OG image generated at', outputPath))
  .catch((err) => {
    console.error('Error generating OG image:', err);
    process.exit(1);
  });
