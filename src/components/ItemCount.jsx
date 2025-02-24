import React, { useState } from 'react';

const ItemCount = ({ inicial = 1, stock = 10, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center mb-3">
        <button 
          className="btn btn-outline-light" 
          onClick={decrementar}
          disabled={cantidad <= 1}
        >
          -
        </button>
        <span className="mx-3 text-light">{cantidad}</span>
        <button 
          className="btn btn-outline-light" 
          onClick={incrementar}
          disabled={cantidad >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="btn w-100" 
        style={{ 
          backgroundColor: '#a4dc34', 
          borderColor: '#a4dc34',
          color: '#000000',
          fontWeight: 'bold'
        }}
        onClick={() => onAdd(cantidad)}
        disabled={stock <= 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

export default ItemCount;