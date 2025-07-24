import { db } from '../firebase/config.js';
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

const autosCollection = collection(db, 'autos');

export async function findAll() {
  const snapshot = await getDocs(autosCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function findById(id) {
  const ref = doc(autosCollection, id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function create(auto) {
  if (!auto.modelo || !auto.marca || !auto.precio || !auto.color || !auto.year) return null;
  const id = Date.now().toString();
  const ref = doc(autosCollection, id);
  await setDoc(ref, auto);
  return { id, ...auto };
}

export async function removeById(id) {
  const ref = doc(autosCollection, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return false;
  await deleteDoc(ref);
  return true;
}