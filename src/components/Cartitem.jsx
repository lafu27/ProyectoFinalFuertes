import { useCart } from '../context/cartcontext';
import { useState } from 'react';
import AlertMessage from './common/AlertMessage';
import Toast from './common/Toast';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CartItem = ({ item }) => {
    const { removeItem, updateItemQuantity } = useCart();
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(item.quantity);
    const [showToast, setShowToast] = useState(false);

    const checkStock = async (productId, newQuantity) => {
      try {
        const docRef = doc(db, 'productos', productId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const productData = docSnap.data();
          return productData.stock >= newQuantity;
        }
        return false;
      } catch (error) {
        console.error('Error checking stock:', error);
        throw error;
      }
    };

    const handleQuantityChange = async (newQuantity) => {
      if (newQuantity < 1) return;
      
      try {
        const available = await checkStock(item.id, newQuantity);
        
        if (!available) {
          setError('No hay suficiente stock disponible');
          return;
        }

        setQuantity(newQuantity);
        updateItemQuantity(item.id, newQuantity);
        setShowToast(true);
        setError(null);
      } catch (error) {
        console.error('Error al actualizar cantidad:', error);
        setError('Error al actualizar la cantidad');
      }
    };

    return (
      <>
        <div className="card mb-3 bg-dark text-light">
          <div className="row g-0">
            <div className="col-md-2">
              <img 
                src={item.imagen} 
                className="img-fluid rounded-start p-2" 
                alt={item.nombre}
                style={{ objectFit: 'contain', height: '100px' }}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="btn-group">
                    <button 
                      className="btn btn-outline-light btn-sm"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-top border-bottom border-light">
                      {quantity}
                    </span>
                    <button 
                      className="btn btn-outline-light btn-sm"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span>Precio unitario: ${item.precio.toLocaleString()}</span>
                </div>
                {error && <AlertMessage type="error" message={error} />}
                <p className="card-text">
                  <small className="text-muted">
                    Subtotal: ${(item.precio * quantity).toLocaleString()}
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <button 
                className="btn btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
        
        <Toast 
          show={showToast}
          message="Cantidad actualizada correctamente"
          type="success"
          onClose={() => setShowToast(false)}
        />
      </>
    );
};  

export default CartItem;