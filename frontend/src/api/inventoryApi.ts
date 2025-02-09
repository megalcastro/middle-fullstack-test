import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInventoryMovement = async (movementData: {
  producto: { sku: string };
  tipo: 'entrada' | 'salida';
  cantidad: number;
}) => {
  try {

    const response = await api.post('/inventario/movimiento', movementData);

    return response.data;
  } catch (error) {
    console.error('Error al registrar el movimiento:', error);
    throw new Error('No se pudo registrar el movimiento de inventario');
  }
};
