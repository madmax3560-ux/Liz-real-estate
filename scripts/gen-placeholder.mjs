import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "images", "liz-finnegan.jpg");

const W = 640;
const H = 800;

// Elegant branded portrait placeholder (forest + brass + cream), with a simple
// monogram. Replace with Liz's authorized headshot before launch.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#274538"/>
      <stop offset="55%" stop-color="#21382e"/>
      <stop offset="100%" stop-color="#1c2e27"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#c69349" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#c69349" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <circle cx="${W / 2}" cy="300" r="118" fill="none" stroke="#d3ac6c" stroke-width="2" opacity="0.55"/>
  <text x="${W / 2}" y="330" text-anchor="middle" font-family="Georgia, serif" font-size="120" fill="#e3cb9e">EF</text>
  <text x="${W / 2}" y="520" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="#faf7f1">Elizabeth Finnegan</text>
  <text x="${W / 2}" y="560" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" letter-spacing="3" fill="#d3ac6c">HOULIHAN LAWRENCE</text>
  <text x="${W / 2}" y="720" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" letter-spacing="2" fill="#b6cec0">HEADSHOT PLACEHOLDER</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(out);
console.log("Wrote", out);
