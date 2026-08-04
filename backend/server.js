require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = Number(process.env.PORT || 4000);
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'hangar-backend', version: '0.1.0' });
});

app.get('/api', (_req, res) => {
  res.json({ name: 'HANGAR API', status: 'online', next: 'database-auth-domain-modules' });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`HANGAR backend listening on http://localhost:${port}`);
});
