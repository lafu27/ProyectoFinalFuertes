import { collection, getDocs, doc, getDoc, addDoc, query, where, updateDoc } from 'firebase/firestore';
import { db } from './config';

// Productos
export const getProductosFromFirebase = async () => {
  try {
    const productosRef = collection(db, 'productos');
    const snapshot = await getDocs(productosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error;
  }
};

export const getProductosByCategoriaFromFirebase = async (categoriaId) => {
  try {
    const productosRef = collection(db, 'productos');
    const q = query(productosRef, where("categoria", "==", categoriaId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    throw error;
  }
};

export const getProductoByIdFromFirebase = async (productoId) => {
  try {
    const docRef = doc(db, 'productos', productoId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error obteniendo producto por id:", error);
    throw error;
  }
};

// Ordenes
export const createOrder = async (orderData) => {
  try {
    // Verificar stock antes de crear la orden
    const outOfStockItems = await checkStockAvailability(orderData.items);
    if (outOfStockItems.length > 0) {
      throw new Error(`Productos sin stock suficiente: ${outOfStockItems.join(', ')}`);
    }

    // Crear la orden
    const ordenesRef = collection(db, 'ordenes');
    const orden = {
      ...orderData,
      fecha: new Date(),
      estado: 'generada'
    };
    
    const docRef = await addDoc(ordenesRef, orden);

    // Actualizar stock de productos
    await updateProductsStock(orderData.items);

    return docRef.id;
  } catch (error) {
    console.error("Error creando orden:", error);
    throw error;
  }
};

// Funciones auxiliares
const checkStockAvailability = async (items) => {
  const outOfStockItems = [];
  
  for (const item of items) {
    const productDoc = await getDoc(doc(db, 'productos', item.id));
    const productData = productDoc.data();
    
    if (!productData || productData.stock < item.quantity) {
      outOfStockItems.push(item.nombre);
    }
  }
  
  return outOfStockItems;
};

const updateProductsStock = async (items) => {
  for (const item of items) {
    const productRef = doc(db, 'productos', item.id);
    const productDoc = await getDoc(productRef);
    const currentStock = productDoc.data().stock;
    
    await updateDoc(productRef, {
      stock: currentStock - item.quantity
    });
  }
};