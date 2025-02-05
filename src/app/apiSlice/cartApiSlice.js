import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => (
        {
            addCart: builder.mutation({
                query: ({ cartData, token }) => (
                    {
                        url: "/carts",
                        method: "POST",
                        body: cartData,
                        headers: { 'Authorization': token }
                    }
                )
            }),
            getCart: builder.query({
                query: ( token ) => (
                    {
                        url: "/carts",
                        method: "GET",
                        headers: { 'Authorization': token }
                    }
                )
            }),
        }
    )
})

export const {useAddCartMutation, useGetCartQuery} = cartApi