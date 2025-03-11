import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApiSlice = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (token) => ({
        url: '/v1/cart',
        method: 'GET',
        headers: { Authorization: token },
      }),
    }),
    addCart: builder.mutation({
      query: ({cartData, token}) => ({
        url: '/v1/cart/add',
        method: 'POST',
        body: cartData,
        headers: { Authorization: token},
      }),
    }),
    updateCart: builder.mutation({
      query: ({cartData, id,  token}) => ({
        url: `/v1/cart/update/${id}`,
        method: 'PATCH',
        body: cartData,
        headers: { Authorization: token},
      }),
    }),
    removeCart: builder.mutation({
      query: ({id, token}) => ({
        url: `/v1/cart/remove/${id}`,
        method: 'DELETE',
        headers: { Authorization: token },
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useRemoveCartMutation
} = cartApiSlice;
