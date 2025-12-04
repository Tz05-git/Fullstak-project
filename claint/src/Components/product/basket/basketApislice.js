import apiSlice from "../../app/apiSlice";

 const basketApislice=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        Getbasket:build.query({
            query:()=>({
                url:"/api/basket",
                method:"GET"
            }),
             providesTags:["basket"]
        }),
       Creatbasket:build.mutation({
            query:(_id)=>({
                url:"/api/basket",
                method:"POST",
                body:{productId:_id}
            }),
            invalidatesTags:["basket"]
        }),
            upbasket:build.mutation({
            query:(id)=>({
                url:"/api/basket",
                method:"PUT",
                body:id
            }),
            invalidatesTags:["basket"]
        }),
        deletebasket:build.mutation({
            query:(id)=>({
                url:`/api/basket${id}`,
                method:"DELETE",
                body:id
            }),
            invalidatesTags:["basket"]
        })
    }),
})
export const{ useGetbasketQuery,useCreatbasketMutation,useDeletebasketMutation,useUpbasketMutation}=basketApislice