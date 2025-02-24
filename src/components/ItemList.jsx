import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;