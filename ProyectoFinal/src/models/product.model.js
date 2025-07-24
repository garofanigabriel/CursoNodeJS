import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./src/data/listaProductos.json');

// Leer los productos desde el JSON
function readProducts() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// Escribir en el archivo
function writeProducts(productos) {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
}

// todos los productos
export function findAll() {
    return readProducts();
}

// productos por id
export function findById(id) {
    return readProducts().find(p => p.id === id);
}

// productos por categoria
export function findByCategory(categoria) {
    return readProducts().filter(p => p.categoria === categoria);
}

// agrega productos al archivo json
export function addProduct(name, price, category) {
    const productos = readProducts();
    const productoNuevo = { id: productos.length + 1, name, price, category }
    productos.push(productoNuevo);
    writeProducts(productos);
    return productoNuevo;
}

// elimina producto del archivo json
export function deleteById(id) {
    const productos = readProducts();
    productos = productos.filter(p => p.id !== id);
    writeProducts(productos);
    return productos;
}


