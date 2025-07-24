import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  addProduct,
  deleteProduct

} from '../services/product.service.js';

export const getProducts = (req, res) => {
  const categoria = req.query.categoria;
  
  if (categoria) {
    const filtrados = getProductsByCategory(categoria);
    if (filtrados.length === 0) {
      return res.status(404).json({ error: 'Esta categoría no existe maquinola' });
    }
    return res.json(filtrados);
  }

  const productos = getAllProducts();
  res.json(productos);
};

export const getProduct = (req, res) => {
  const id = Number(req.params.id);
  const producto = getProductById(id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado maquinola' });
  }
};

export const postProducto = (req, res) => {
  const { nombre, precio, categoria } = req.body;
  if (!nombre || !precio || !categoria) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const productoCreado = addProduct( nombre, precio, categoria);
  res.status(201).json(productoCreado);
};

export const deleteProducto = (req, res) => {
  const id = Number(req.params.id);
  const productoEliminado = deleteProduct(id);

  if (!productoEliminado) {
    return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
  }

  res.json({ mensaje: 'Producto eliminado', producto: productoEliminado });
};
