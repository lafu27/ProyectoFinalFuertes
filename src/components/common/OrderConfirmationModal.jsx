import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationModal = ({ orderId, onClose, show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-dark text-light p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#a4dc34' }}>
          ¡Orden Confirmada!
        </h2>
        
        <p className="mb-4">
          Tu orden ha sido procesada exitosamente.
          <br />
          Número de orden: <strong>{orderId}</strong>
        </p>
        
        <p className="mb-6 text-sm opacity-75">
          Guarda este número para hacer seguimiento de tu pedido.
        </p>
        
        <div className="flex justify-end gap-3">
          <Link 
            to="/"
            className="px-4 py-2 rounded"
            style={{ 
              backgroundColor: '#a4dc34',
              color: '#000000',
              fontWeight: 'bold'
            }}
            onClick={onClose}
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;