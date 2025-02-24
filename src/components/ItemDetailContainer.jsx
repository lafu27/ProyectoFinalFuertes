import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoByIdFromFirebase } from '../firebase/firebase';
import ItemDetail from './ItemDetail';
import LoadingSpinner from './common/LoadingSpinner';
import AlertMessage from './common/AlertMessage';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProductoByIdFromFirebase(id);
        
        if (!data) {
          setError('Producto no encontrado');
          return;
        }
        
        setProducto(data);
      } catch (error) {
        console.error(error);
        setError('Error al cargar el producto. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <div className="container mt-4">
      {loading && <LoadingSpinner message="Cargando detalles del producto..." />}
      
      {error && <AlertMessage type="error" message={error} />}
      
      {!loading && !error && producto && <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;