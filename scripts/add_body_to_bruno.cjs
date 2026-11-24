// add_body_to_bruno.cjs
// Reads each JSON file in bruno-collection and adds a placeholder body for POST/PUT requests.
const fs = require('fs');
const path = require('path');

const collectionDir = path.resolve('bruno-collection');
if (!fs.existsSync(collectionDir)) {
  console.error('Collection directory does not exist');
  process.exit(1);
}

fs.readdirSync(collectionDir).forEach(file => {
  if (!file.endsWith('.json')) return;
  const filePath = path.join(collectionDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try { data = JSON.parse(raw); } catch (e) { console.warn('Skipping invalid JSON', file); return; }
  const method = data.request?.method?.toUpperCase();
  if (method === 'POST' || method === 'PUT') {
    // If body already exists, skip.
    if (!('body' in data.request)) {
      data.request.body = {};
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log('Added body to', file);
    }
  }
});
