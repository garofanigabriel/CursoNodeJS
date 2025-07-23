import express from 'express';
import { getProducts, getProduct } from '../controllers/products.controller.js';

const router = express.Router();

//GET
router.get('/', getProducts);           // /productos
router.get('/:id', getProduct);        // /productos/:id

//POST
//PUT
//DELETE

export default router;
