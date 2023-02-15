import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes : ["Products"],
    endpoints: (builder) => ({

        posts: builder.query({
            query:()=>'/products?skip=6&limit=5',
            providesTags: ["Products"]
        }),

        updateProduct :builder.mutation({
            query : ({id , ...patch})=>({
                url : `products/ ${id}`,
                method : 'PUT' ,
                body: patch
            }),
            invalidatesTags:["Products"]
        }),

        deleteProduct: builder.mutation({
            invalidatesTags:["Products"], 
            query: (id) => ({
                url: `/posts/${id}`,
                method:"DELETE",
            }),
        }),

       
    })
})

export const { usePostsQuery ,useDeleteProductMutation,useUpdateProductMutation } = postsApi