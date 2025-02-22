import { baseApi } from "@/redux/api/baseApi";

const specialismApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createSpecialism: builder.mutation({
            query: ({ data, id }) => ({
                url: `/specialism/create/${id}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['specialism']
        }),

        getMySpecialism: builder.query({
            query: (id) => ({
                url: `/specialism/${id}`,
                method: "GET",
            }),
            providesTags: ['specialism']
        }),

        deleteSpecialism: builder.mutation({
            query: (id) => ({
                url: `/specialism/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['specialism']
        }),

    }),
});

export const { useCreateSpecialismMutation, useGetMySpecialismQuery, useDeleteSpecialismMutation } = specialismApi;

export default specialismApi;
