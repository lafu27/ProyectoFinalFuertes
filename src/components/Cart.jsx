import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartcontext';
import CartItem from './CartItem';
import AlertMessage from './common/AlertMessage';
import LoadingSpinner from './common/LoadingSpinner';
import Toast from './common/Toast';

const Cart = () => {
  const { cart, clear, getTotalPrice, loading } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      clear();
      setShowToast(true);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Cargando carrito..." />;
  }

  if (cart.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <AlertMessage 
          type="info" 
          message="Tu carrito está vacío" 
        />
        <Link to="/" className="btn btn-success mt-3">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-4">
        <div className="card bg-dark text-light">
          <div className="card-body">
            <h2 className="card-title mb-4" style={{ color: '#a4dc34' }}>Tu Carrito</h2>
            
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h3>Total: ${getTotalPrice().toLocaleString()}</h3>
              <div>
                <button 
                  className="btn btn-danger me-2"
                  onClick={handleClearCart}
                >
                  Vaciar Carrito
                </button>
                <Link 
                  to="/checkout" 
                  className="btn"
                  style={{ 
                    backgroundColor: '#a4dc34', 
                    color: '#000000',
                    fontWeight: 'bold'
                  }}
                >
                  Finalizar Compra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Toast 
        show={showToast}
        message="Carrito vaciado correctamente"
        type="success"
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default Cart;