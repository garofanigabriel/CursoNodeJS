import * as ProductFirestore from '../models/product.model.js';

export function getAllProducts() {
  return ProductFirestore.getAllProducts();
}

export function getProductById(id) {
  return ProductFirestore.getProductById(id);
}

// export function getProductsByCategory(categoria) {
//   return ProductFirestore.findByCategory(categoria);
// }

export function saveProduct(product) {
  return ProductFirestore.saveProduct(product)
}

export function deleteProduct(id) {
  return ProductFirestore.deleteProduct(id)
}