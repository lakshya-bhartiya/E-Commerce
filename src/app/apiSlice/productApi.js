import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi(
    {
        reducerPath: 'productsApi', // Redux store mein slice ka naam
        baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
        endpoints: (builder) => ({
            products: builder.query({
                query: (token) => ({
                    url: '/products',
                    method: 'GET',
                    headers: {'Authorization': token}
                }),
            }),
        }
        )
    }
)

export const {useProductsQuery} = productsApi