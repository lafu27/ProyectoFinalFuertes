import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartcontext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-black flex flex-col w-full">
          <NavBar />
          <main className="flex-1 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="max-w-7xl mx-auto w-full">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <ItemListContainer greeting="Bienvenidos a PC Monster" />
                    } 
                  />
                  <Route 
                    path="/categoria/:categoriaId" 
                    element={<ItemListContainer />} 
                  />
                  <Route 
                    path="/item/:id" 
                    element={<ItemDetailContainer />} 
                  />
                  <Route 
                    path="/cart" 
                    element={<Cart />} 
                  />
                  <Route 
                    path="/checkout" 
                    element={<CheckoutForm />} 
                  />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;