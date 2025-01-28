import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi(
    {
        reducerPath: 'categoryApi', // Redux store mein slice ka naam
        baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
        endpoints: (builder) => ({
            categories: builder.query({
                query: (token) => ({
                    url: '/products/categories',
                    method: 'GET',
                    headers: { 'Authorization': token }
                }),
            }),
            getProductsByCategory: builder.query({
                query: ({ category, token }) => ({
                    url: `/products/category/${category}`,
                    method: 'GET',
                    headers: { 'Authorization': token }
                })
            })
        }
        )
    }
)

export const { useCategoriesQuery, useGetProductsByCategoryQuery } = categoryApi