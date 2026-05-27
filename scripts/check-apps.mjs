#!/usr/bin/env node
import { stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { apps } from "../lib/apps.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const errors = [];

for (const app of apps) {
  try {
    new URL(app.url);
  } catch {
    errors.push(`${app.name}: invalid url ${JSON.stringify(app.url)}`);
  }

  if (!app.screenshots) continue;

  for (const s of app.screenshots) {
    if (!s.src.startsWith("/")) {
      errors.push(`${app.name}: screenshot src must start with "/": ${s.src}`);
      continue;
    }
    const abs = join(PUBLIC, s.src);
    try {
      await stat(abs);
    } catch {
      errors.push(`${app.name}: missing screenshot file ${abs}`);
      continue;
    }
    const meta = await sharp(abs).metadata();
    if (meta.width !== s.width || meta.height !== s.height) {
      errors.push(
        `${app.name}: ${s.src} declared ${s.width}x${s.height} but file is ${meta.width}x${meta.height}`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error("apps.ts consistency check FAILED:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

console.log(`apps.ts consistency check OK (${apps.length} apps)`);
