import {
  getAllProducts,
  getProductById,
  // getProductsByCategory,
  saveProduct,
  deleteProduct

} from '../services/product.service.js';

export const getProducts = async (req, res) => {
  // const categoria = req.query.categoria;

  // if (categoria) {
  //   const filtrados = getProductsByCategory(categoria);
  //   if (filtrados.length === 0) {
  //     return res.status(404).json({ error: 'Esta categoría no existe maquinola' });
  //   }
  //   return res.json(filtrados);
  // }

  const productos = await getAllProducts();
  res.json(productos);
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  const producto = await getProductById(id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado maquinola' });
  }
};

export const postProducto = async (req, res) => {
  const { nombre, precio, categoria } = req.body;
  if (!nombre || !precio || !categoria) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }
  try {
    await saveProduct({ nombre, precio, categoria });
    res.status(201).json('success');
  } catch {
    return res.status(400).json({ error: 'No se pudo guardar el objeto' })
  }

};

export const deleteProducto = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteProduct(id);
    res.json({ mensaje: 'Producto eliminado'});
  } catch {
    return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
  }
};
