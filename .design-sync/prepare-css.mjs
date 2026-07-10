/* Copies the Next/Turbopack-compiled Tailwind stylesheet (hashed filename) and its
   next/font woff2 files to stable paths for the design-sync converter.
   Run after `npm run build`. Output: .design-sync/.cache/app.css + fonts/. */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const chunks = path.join(root, ".next", "static", "chunks");
const media = path.join(root, ".next", "static", "media");
const outDir = path.join(root, ".design-sync", ".cache");
const outFonts = path.join(outDir, "fonts");

const cssFiles = fs
  .readdirSync(chunks)
  .filter((f) => f.endsWith(".css"))
  .map((f) => ({ f, size: fs.statSync(path.join(chunks, f)).size }))
  .sort((a, b) => b.size - a.size);
if (!cssFiles.length) {
  console.error("no compiled css found under .next/static/chunks — run `npm run build` first");
  process.exit(1);
}

fs.mkdirSync(outFonts, { recursive: true });
let css = fs.readFileSync(path.join(chunks, cssFiles[0].f), "utf8");

// Rewrite media urls (Turbopack: ../media/<f>; webpack: /_next/static/media/<f>)
// to local ./fonts/<file> and copy the files.
const copied = new Set();
css = css.replace(/url\((?:\.\.\/media\/|\/_next\/static\/media\/)([^)]+)\)/g, (_, file) => {
  const clean = file.replace(/["']/g, "");
  const src = path.join(media, clean);
  if (fs.existsSync(src) && !copied.has(clean)) {
    fs.copyFileSync(src, path.join(outFonts, clean));
    copied.add(clean);
  }
  return `url(./fonts/${clean})`;
});

fs.writeFileSync(path.join(outDir, "app.css"), css);
console.log(`wrote .design-sync/.cache/app.css (${css.length} bytes, from ${cssFiles[0].f}) + ${copied.size} font files`);
