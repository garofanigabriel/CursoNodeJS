import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import autosRoutes from './src/routes/autos.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { verifyToken } from './src/middlewares/auth.middleware.js';

dotenv.config(); // ??
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api/autos', verifyToken, autosRoutes);

app.get('/', (req, res) => {
  res.send('API de Autos funcionando');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada maquinola, try again' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

