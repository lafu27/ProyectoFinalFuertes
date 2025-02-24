import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import productos from '../firebase/products';

const uploadProducts = async () => {
  try {
    const productsRef = collection(db, 'products');
    
    for (const producto of productos) {
      await addDoc(productsRef, producto);
      console.log(`Producto ${producto.nombre} agregado correctamente`);
    }
    
    console.log('Todos los productos fueron cargados exitosamente');
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
};

const LoadProductsButton = () => {
  return (
    <button 
      onClick={uploadProducts}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}
    >
      Cargar Productos
    </button>
  );
};

export default LoadProductsButton;