import { db } from '../data/data.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'productos');

// Método para buscar un producto por su ID
export async function getProductById(id) {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
        return {
            id: productDoc.id,
            ...productDoc.data()
        };
    } else {
        return null;
    }
}

// Método para obtener todos los productos
export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return products;
};

// Método para guardar un producto en Firestore
export async function saveProduct(product) {
    await addDoc(productsCollection, product);
};

// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
    await deleteDoc(doc(productsCollection, id));
};
