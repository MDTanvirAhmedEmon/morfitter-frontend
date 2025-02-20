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

export const { useGetAllTrainerQuery, useGetSingleTrainerSessionQuery } = trainerApi;

export default trainerApi;
