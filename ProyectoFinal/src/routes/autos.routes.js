import express from 'express';
import {
    getAllAutos,
    getAutoById,
    createAuto,
    deleteAuto
} from '../controllers/autos.controller.js';

const router = express.Router();

//GET
router.get('/', getAllAutos);                   // api/autos
router.get('/:id', getAutoById);                // api/autos/:id

//POST
router.post('/create', createAuto);             // api/autos/create

//DELETE
router.delete('/:id', deleteAuto);              // api/autos/:id

export default router;
