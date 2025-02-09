import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/productApi';

interface Product {
  id: string;
  nombre: string;
  sku: string;
  precio: number;
  stock: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await getProducts();
  return response;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  } as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error desconocido';
      });
  },
});

export default productSlice.reducer;
