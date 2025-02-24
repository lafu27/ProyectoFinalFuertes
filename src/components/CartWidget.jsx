import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/cartcontext';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <Link to="/cart" className="text-decoration-none">
      <div className="d-flex align-items-center position-relative" style={{ color: '#a4dc34', cursor: 'pointer' }}>
        <ShoppingCart className="me-2" />
        {quantity > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {quantity}
          </span>
        )}
        <div className="ms-2 d-none d-lg-block">
          <span className="text-light">Carrito</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;