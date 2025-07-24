import * as ProductModel from '../models/product.model.js';

export function getAllProducts() {
  return ProductModel.findAll();
}

export function getProductById(id) {
  return ProductModel.findById(id);
}

export function getProductsByCategory(categoria) {
  return ProductModel.findByCategory(categoria);
}

export function addProduct(name, price, category) {
  return ProductModel.addProduct(name, price, category)
}

export function deleteProduct(id) {
  return ProductModel.deleteById(id)
}