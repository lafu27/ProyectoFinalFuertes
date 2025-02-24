import { doc, getDoc, writeBatch } from 'firebase/firestore';
import { db } from './config';

export const validateStock = async (items) => {
  const invalidItems = [];
  
  for (const item of items) {
    const docRef = doc(db, 'productos', item.id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists() || docSnap.data().stock < item.quantity) {
      invalidItems.push({
        id: item.id,
        name: item.nombre,
        requested: item.quantity,
        available: docSnap.exists() ? docSnap.data().stock : 0
      });
    }
  }
  
  return invalidItems;
};

export const updateStockBatch = async (items) => {
  const batch = writeBatch(db);
  
  for (const item of items) {
    const docRef = doc(db, 'productos', item.id);
    const docSnap = await getDoc(docRef);
    const currentStock = docSnap.data().stock;
    
    batch.update(docRef, {
      stock: currentStock - item.quantity
    });
  }
  
  await batch.commit();
};