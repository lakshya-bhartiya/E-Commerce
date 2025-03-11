// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApiSlice';
import { productsApi } from './productApi';
import { categoryApi } from './categoryApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer, // Add Auth API slice reducer
    [productsApi.reducerPath]: productsApi.reducer, // Add Products API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware) // Add Auth API middleware
      .concat(categoryApi.middleware)
      .concat(productsApi.middleware) // Add Products API middleware
});