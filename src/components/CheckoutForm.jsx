import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext';
import { createOrder } from '../firebase/firebase';
import AlertMessage from './common/AlertMessage';
import LoadingSpinner from './common/LoadingSpinner';
import OrderConfirmationModal from './common/OrderConfirmationModal';

const CheckoutForm = () => {
  const { cart, getTotalPrice, clear } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const validateForm = () => {
    if (!orderData.name.trim()) return 'El nombre es requerido';
    if (!orderData.email.trim()) return 'El email es requerido';
    if (!orderData.email.includes('@')) return 'Email inválido';
    if (!orderData.phone.trim()) return 'El teléfono es requerido';
    if (!orderData.address.trim()) return 'La dirección es requerida';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (cart.length === 0) {
      setError('El carrito está vacío');
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      const order = {
        buyer: orderData,
        items: cart.map(({ id, nombre, precio, quantity }) => ({
          id,
          nombre,
          precio,
          quantity
        })),
        total: getTotalPrice(),
        date: new Date().toISOString()
      };
      
      const newOrderId = await createOrder(order);
      setOrderId(newOrderId);
      clear();
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al procesar la orden. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setOrderData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(null);
  };

  if (loading) {
    return <LoadingSpinner message="Procesando tu orden..." />;
  }

  return (
    <div className="container mt-4">
      <div className="card bg-dark text-light">
        <div className="card-body">
          <h2 className="card-title mb-4" style={{ color: '#a4dc34' }}>Finalizar Compra</h2>
          
          {error && <AlertMessage type="error" message={error} />}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={orderData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={orderData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={orderData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Dirección de envío</label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={orderData.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-light">Total: ${getTotalPrice().toLocaleString()}</span>
              <button 
                type="submit" 
                className="btn"
                style={{ 
                  backgroundColor: '#a4dc34', 
                  color: '#000000',
                  fontWeight: 'bold'
                }}
              >
                Confirmar Orden
              </button>
            </div>
          </form>
        </div>
      </div>

      <OrderConfirmationModal 
        show={showConfirmation}
        orderId={orderId}
        onClose={() => {
          setShowConfirmation(false);
          navigate('/');
        }}
      />
    </div>
  );
};

export default CheckoutForm;