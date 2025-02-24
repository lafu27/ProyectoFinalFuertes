import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="col">
      <div className="card h-100 bg-dark text-light">
        <img 
          src={producto.imagen} 
          className="card-img-top p-3" 
          alt={producto.nombre}
          style={{ objectFit: 'contain', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ color: '#a4dc34' }}>{producto.nombre}</h5>
          <p className="card-text mb-2">{producto.categoria}</p>
          <p className="card-text mb-3">$ {producto.precio.toLocaleString()}</p>
          <Link 
            to={`/item/${producto.id}`}
            className="btn mt-auto"
            style={{ 
              backgroundColor: '#a4dc34', 
              borderColor: '#a4dc34',
              color: '#000000',
              fontWeight: 'bold'
            }}
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;