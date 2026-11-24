// populate_bruno_bodies.cjs
// Populate sample request bodies for Bruno JSON files based on endpoint name.
const fs = require('fs');
const path = require('path');

const collectionDir = path.resolve('bruno-collection');
if (!fs.existsSync(collectionDir)) {
  console.error('Bruno collection directory not found');
  process.exit(1);
}

// Mapping of filename (without .json) to sample body object
const sampleBodies = {
  'login': { username: 'testuser', password: '1234' },
  'set-password': { newPassword: 'newpass123', confirmPassword: 'newpass123' },
  'reset-password': { email: 'user@example.com' },
  'create-evaluation': { title: 'Evaluation 1', stat_date: '2024-01-01', end_date: '2024-12-31' },
  'create-indicators': { eval_id: 1, name: 'Indicator 1', description: 'Sample indicator', weight: 10, type: 'boolean', type_file: 'url' },
  'create-user': { fname: 'John', lname: 'Doe', username: 'jdoe', role: 'evaluator' },
  // add more as needed
};

fs.readdirSync(collectionDir).forEach(file => {
  if (!file.endsWith('.json')) return;
  const base = file.replace(/\.json$/i, '');
  const filePath = path.join(collectionDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try { data = JSON.parse(raw); } catch (e) { console.warn('Skipping invalid JSON', file); return; }
  const method = (data.request?.method || '').toUpperCase();
  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    if (!data.request.body || Object.keys(data.request.body).length === 0) {
      const sample = sampleBodies[base];
      if (sample) {
        data.request.body = sample;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Added body to', file);
      }
    }
  }
});
