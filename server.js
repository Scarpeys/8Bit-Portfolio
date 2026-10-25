import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', project: 'anti-slop-showcase', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Anti-Slop Showcase running at http://localhost:${PORT}`);
});
