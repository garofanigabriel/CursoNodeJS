import express from 'express';
import cors from 'cors';
import productsRoutes from './src/routes/products.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hey world, From Express');
});

// Conecta rutas
app.use('/productos', productsRoutes);

app.get('/ping', (req, res) => {
    res.send('/pong');
});

app.get('/bienvenido', (req,res) => {
    res.send('<h1> Welcome to Express Server</h1>');
});

// Middleware para el error 404 (404 = ruta no encontrada)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
