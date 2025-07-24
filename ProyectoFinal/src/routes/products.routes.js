import express from 'express';
import { getProducts, getProduct, postProducto, deleteProducto } from '../controllers/products.controller.js';

const router = express.Router();

//GET
router.get('/', getProducts);           // /productos
router.get('/:id', getProduct);         // /productos/:id

//POST
router.post('/', postProducto);         // /productos

//DELETE
router.delete('/:id', deleteProducto);  // /productos/:id

export default router;
