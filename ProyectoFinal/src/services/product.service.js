const productos = [
  { id: 1, nombre: 'Cafe', precio: 2500, categoria: 'bebida' },
  { id: 2, nombre: 'Te', precio: 500, categoria: 'bebida' },
  { id: 3, nombre: 'Chocolate', precio: 5000, categoria: 'comida' },
  { id: 4, nombre: 'Alfajor', precio: 1500, categoria: 'comida' },
  { id: 5, nombre: 'Cereal', precio: 2000, categoria: 'desayuno' }
];

export function getAllProducts() {
  return productos;
}

export function getProductById(id) {
  return productos.find(p => p.id === id);
}

export function getProductsByCategory(categoria) {
  return productos.filter(p => p.categoria === categoria);
}
