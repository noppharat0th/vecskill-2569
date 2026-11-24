// generate_bruno.cjs
// Scan server/api/**/*.ts and create Bruno request JSON files per endpoint.
const fs = require('fs');
const path = require('path');

const apiRoot = path.resolve('server/api');
const outDir = path.resolve('bruno-collection');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.ts')) processFile(full);
  }
}

function processFile(fullPath) {
  const rel = path.relative(apiRoot, fullPath); // e.g., "auth/login.post.ts"
  const parts = rel.split(path.sep);
  const file = parts.pop(); // filename
  const folderParts = parts; // array of folder names
  const match = file.match(/^(.*)\.(get|post|put|delete)\.ts$/i);
  if (!match) return; // skip if pattern not matched
  const namePart = match[1];
  const method = match[2].toUpperCase();

  // Build route
  let route = '/api';
  if (folderParts.length) route += '/' + folderParts.join('/');
  // If namePart is not same as method (case-insensitive) add as segment
  if (namePart.toLowerCase() !== method.toLowerCase()) {
    route += '/' + namePart;
  }
  // Replace bracket params with curly braces for Bruno syntax
  route = route.replace(/\[([^\]]+)\]/g, '{$1}');

  const url = `${baseUrl}${route}`;
  const obj = {
    name: `${method} ${route}`,
    request: {
      url,
      method,
      headers: { 'Content-Type': 'application/json' }
    }
  };
  const outFileName = file.replace(/\.(get|post|put|delete)\.ts$/i, '.json');
  const outPath = path.join(outDir, outFileName);
  fs.writeFileSync(outPath, JSON.stringify(obj, null, 2), 'utf8');
  console.log('Created', outPath);
}

walk(apiRoot);
