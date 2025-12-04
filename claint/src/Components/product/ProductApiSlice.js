
import apiSlice from "../app/apiSlice"


const ProductApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        GetProduct: build.query({
            query: () => ({
                url: "/api/product",
                method: "GET"
            }),
            providesTags: ["Product"]
        }),
        CreatPoduct: build.mutation({
            query: (newItem) => ({
                url: "/api/product",
                method: "POST",
                body: newItem
            }),
            invalidatesTags: ["Product"]
        }),
        upProduct: build.mutation({
            query: (data) => ({
                url: `/api/product/`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Product"]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/api/product/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Product"]
        })
    }),
})

export const { useGetProductQuery, useCreatPoductMutation, useDeleteProductMutation, useUpProductMutation } = ProductApiSlice