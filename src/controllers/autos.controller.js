import {
  getAll,
  getById,
  save,
  remove
} from '../services/autos.service.js';

export async function getAllAutos(req, res) {
  try {
    const autos = await getAll();
    res.json(autos);
  } catch {
    res.status(500).json({ error: 'error interno del servidor (500)' })
  }
}

export async function getAutoById(req, res) {
  try {
    const auto = await getById(req.params.id);
    if (!auto) return res.status(404).json({ error: 'Auto no encontrado maquinola, try again' });
    res.json(auto);
  } catch {
    res.status(500).json({ error: 'error interno del servidor (500)' })
  }
}

export async function createAuto(req, res) {
  try {
    const nuevo = await save(req.body);
    if (!nuevo) return res.status(400).json({ error: 'Datos inválidos' });
    res.status(201).json(nuevo);
  } catch {
    res.status(500).json({ error: 'error interno del servidor (500)' })
  }
}

export async function deleteAuto(req, res) {
  try {
    const ok = await remove(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Auto no encontrado, no existe o ya fue eliminado previamente' });
    res.json({ mensaje: 'Auto eliminado correctamente' });
  }
  catch {
    res.status(500).json({ error: 'error interno del servidor (500)' })
  }
}