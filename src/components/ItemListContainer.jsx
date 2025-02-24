import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductosFromFirebase, getProductosByCategoriaFromFirebase } from '../firebase/firebase';
import ItemList from './ItemList';
import LoadingSpinner from './common/LoadingSpinner';
import AlertMessage from './common/AlertMessage';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = categoriaId 
          ? await getProductosByCategoriaFromFirebase(categoriaId)
          : await getProductosFromFirebase();
        
        if (data.length === 0) {
          setError(categoriaId 
            ? `No hay productos en la categoría ${categoriaId}`
            : 'No hay productos disponibles');
        }
        
        setProductos(data);
      } catch (error) {
        console.error(error);
        setError('Error al cargar los productos. Por favor, intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoriaId]);

  return (
    <div className="container mt-4">
      {greeting && (
        <div className="p-5 text-center bg-dark text-light rounded mb-4">
          <h2 style={{ color: '#a4dc34' }}>{greeting}</h2>
          <p className="lead">Los mejores componentes para tu PC al mejor precio</p>
        </div>
      )}

      {loading && <LoadingSpinner message="Cargando productos..." />}
      
      {error && <AlertMessage type="error" message={error} />}
      
      {!loading && !error && productos.length > 0 && <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;