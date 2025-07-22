import express from 'express'; 
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hey World, From Express');
});

app.get('/ping', (req, res) => {
    res.send('/pong');
});

app.get('/bienvenido', (req,res) => {
    res.send('<h1> Welcome to Express Server</h1>');
});

const products = [
        {id: 1, nombre: 'Cafe', precio: '2500'},
        {id: 2, nombre: 'Te', precio: '500'},
        {id: 3, nombre: 'Chocolate', precio: '5000'},
        {id: 4, nombre: 'Alfajor', precio: '1500'},
        {id: 5, nombre: 'Cereal', precio: '2000'}
    ]

app.get('/productos', (req,res) => {
    res.json(products)
});

app.get('/productos/:id', (req, res) => {
    const id = Number(req.params.id);
    const producto = products.find(p => p.id ===id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({error: 'Producto no encontrado o inexistente'})
    }
})

app.get('/ruta', (req, res) => {
    res.send('<h1> Nueva ruta</h1>');
});

app.use((req, res) => {
    res.status(404).json({error: 'Ruta no encontrada, maquinola'})
})




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});