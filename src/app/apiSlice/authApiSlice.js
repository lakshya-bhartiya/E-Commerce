// src/features/authApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi', // Redux store mein slice ka naam
  baseQuery: fetchBaseQuery({ baseUrl: 'https://j41rsbj1-5000.inc1.devtunnels.ms/' }), // Auth API base URL
  endpoints: (builder) => ({
    // Register User
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/v1/register/create',
        method: 'POST',
        body: userData,
      }),
    }),
    // Login User
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/v1/register/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;