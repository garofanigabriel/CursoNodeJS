import * as model from '../models/auto.model.js';

export function getAll() {
  return model.findAll();
}

export function getById(id) {
  return model.findById(id);
}

export function save(data) {
  return model.create(data);
}

export function remove(id) {
  return model.removeById(id);
}