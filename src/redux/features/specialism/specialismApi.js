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

    }),
});

export const { useCreateSpecialismMutation, useGetMySpecialismQuery } = specialismApi;

export default specialismApi;
