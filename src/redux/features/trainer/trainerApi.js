import { baseApi } from "@/redux/api/baseApi";

const trainerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // createQualification: builder.mutation({
        //     query: ({ data, id }) => ({
        //         url: `/qualification/create/${id}`,
        //         method: "POST",
        //         body: data,
        //     }),
        //     invalidatesTags: ['qualification']
        // }),

        getAllTrainer: builder.query({
            query: (params) => ({
                url: `/trainer`,
                method: "GET",
                params,
            }),
        }),
        getSingleTrainer: builder.query({
            query: (id) => ({
                url: `/trainer/${id}`,
                method: "GET",
            }),
        }),
        getSingleTrainerSession: builder.query({
            query: ({ id, ...params }) => ({
                url: `/session/${id}`,
                method: "GET",
                params,
            }),
            providesTags: ['session']
        }),

    }),
});

export const { useGetAllTrainerQuery, useGetSingleTrainerSessionQuery, useGetSingleTrainerQuery } = trainerApi;

export default trainerApi;
