// Generates labelled SVG placeholder images in public/images.
// Run with: npm run placeholders
// Existing files are never overwritten, so real photos are safe.
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const placeholders = [
  { file: "profile/obadiah-gitau-portrait.svg", w: 800, h: 1000, label: "Profile Portrait", shape: "portrait" },
  { file: "hsc/medal.svg", w: 600, h: 600, label: "HSC Medal", shape: "medal" },
  { file: "hsc/certificate.svg", w: 1200, h: 900, label: "HSC Certificate", shape: "document" },
  { file: "documents/hsc-certificate.svg", w: 1200, h: 900, label: "Certificate Preview", shape: "document" },
  { file: "documents/letter-of-recognition.svg", w: 1200, h: 900, label: "Letter Preview", shape: "document" },
  { file: "documents/citation.svg", w: 1200, h: 900, label: "Citation Preview", shape: "document" },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    file: `gallery/gallery-0${n}.svg`, w: 1200, h: 900, label: `Gallery Photo ${n}`, shape: "photo",
  })),
];

function art(shape, w, h) {
  const cx = w / 2;
  const cy = h / 2 - 30;
  const stroke = 'fill="none" stroke="#b08d3c" stroke-width="3" opacity="0.55"';
  if (shape === "portrait") {
    return `<circle cx="${cx}" cy="${cy - 90}" r="110" ${stroke}/><path d="M${cx - 220} ${cy + 260} q${220} -260 ${440} 0" ${stroke}/>`;
  }
  if (shape === "medal") {
    return `<circle cx="${cx}" cy="${cy}" r="140" ${stroke}/><circle cx="${cx}" cy="${cy}" r="110" ${stroke}/><path d="M${cx} ${cy - 60} l18 40 44 4 -33 29 10 43 -39 -23 -39 23 10 -43 -33 -29 44 -4z" ${stroke}/>`;
  }
  if (shape === "document") {
    return `<rect x="${cx - 260}" y="${cy - 230}" width="520" height="400" rx="6" ${stroke}/>${[0, 1, 2, 3, 4]
      .map((i) => `<line x1="${cx - 190}" x2="${cx + 190 - (i % 2) * 90}" y1="${cy - 140 + i * 60}" y2="${cy - 140 + i * 60}" ${stroke}/>`)
      .join("")}`;
  }
  return `<rect x="${cx - 220}" y="${cy - 160}" width="440" height="300" rx="8" ${stroke}/><circle cx="${cx - 120}" cy="${cy - 70}" r="34" ${stroke}/><path d="M${cx - 200} ${cy + 120} l140 -130 90 80 70 -60 120 110" ${stroke}/>`;
}

function svg({ w, h, label, shape }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label} placeholder">
  <rect width="${w}" height="${h}" fill="#0b1f3a"/>
  <rect x="16" y="16" width="${w - 32}" height="${h - 32}" fill="none" stroke="#b08d3c" stroke-opacity="0.35" stroke-dasharray="10 8"/>
  ${art(shape, w, h)}
  <text x="50%" y="${h - 150}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(w / 22)}" fill="#f5f1e6">${label}</text>
  <text x="50%" y="${h - 100}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(w / 40)}" fill="#b08d3c" letter-spacing="3">PLACEHOLDER · ${w} × ${h}</text>
</svg>
`;
}

for (const p of placeholders) {
  const target = path.join(root, p.file);
  try {
    await access(target);
    console.log(`skip  ${p.file} (already exists)`);
    continue;
  } catch {}
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, svg(p));
  console.log(`write ${p.file}`);
}
