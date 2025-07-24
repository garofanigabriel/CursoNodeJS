import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import autosRoutes from './src/routes/autos.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { verifyToken } from './src/middlewares/auth.middleware.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // ??
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api/autos', verifyToken, autosRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada maquinola, try again' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

