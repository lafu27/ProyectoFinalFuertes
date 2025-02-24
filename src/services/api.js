import { productos } from './products.js';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getProductos = async () => {
  await delay(1000);
  return productos;
};

export const getProductoById = async (id) => {
  await delay(1000);
  const producto = productos.find(p => p.id === parseInt(id));
  if (!producto) {
    throw new Error('Producto no encontrado');
  }
  return producto;
};

export const getProductosByCategoria = async (categoria) => {
  await delay(1000);
  const productosFiltrados = productos.filter(p => p.categoria === categoria);
  return productosFiltrados;
};