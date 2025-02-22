import { baseApi } from "@/redux/api/baseApi";

const qualificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createQualification: builder.mutation({
            query: ({ data, id }) => ({
                url: `/qualification/create/${id}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['qualification']
        }),

        getMyQualification: builder.query({
            query: (id) => ({
                url: `/qualification/${id}`,
                method: "GET",
            }),
            providesTags: ['qualification']
        }),

        deleteQualification: builder.mutation({
            query: (id) => ({
                url: `/qualification/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['qualification']
        }),

    }),
});

export const { useCreateQualificationMutation, useGetMyQualificationQuery, useDeleteQualificationMutation } = qualificationApi;

export default qualificationApi;
