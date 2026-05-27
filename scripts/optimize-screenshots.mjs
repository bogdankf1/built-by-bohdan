#!/usr/bin/env node
import { readdir, stat } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "apps");
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 82;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.isFile() && p.endsWith(".png")) out.push(p);
  }
  return out;
}

function fmtBytes(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(2) + " MB";
  if (n > 1024) return (n / 1024).toFixed(0) + " KB";
  return n + " B";
}

const pngs = await walk(ROOT);
pngs.sort();
const results = [];
let totalIn = 0;
let totalOut = 0;

for (const src of pngs) {
  const dst = src.replace(/\.png$/, ".webp");
  const meta = await sharp(src).metadata();
  const targetWidth = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);
  const info = await sharp(src)
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(dst);
  const inSize = (await stat(src)).size;
  const outSize = info.size;
  totalIn += inSize;
  totalOut += outSize;
  const rel = src.slice(ROOT.length + 1);
  results.push({
    src: "/apps/" + rel.replace(/\.png$/, ".webp"),
    width: info.width,
    height: info.height,
    inBytes: inSize,
    outBytes: outSize,
  });
  console.log(
    `${rel.padEnd(40)} ${String(meta.width).padStart(4)}x${String(meta.height).padStart(4)} → ${String(info.width).padStart(4)}x${String(info.height).padStart(4)}  ${fmtBytes(inSize).padStart(8)} → ${fmtBytes(outSize).padStart(8)}`,
  );
}

console.log(
  `\nTotal: ${fmtBytes(totalIn)} → ${fmtBytes(totalOut)}  (${((1 - totalOut / totalIn) * 100).toFixed(0)}% reduction)`,
);

console.log("\nJSON manifest:");
console.log(JSON.stringify(results, null, 2));
