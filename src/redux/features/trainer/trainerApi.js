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
        getMembers: builder.query({
            query: (id) => ({
                url: `/access/total-members/${id}`,
                method: "GET",
            }),
        }),
        getMyFollowers: builder.query({
            query: (id) => ({
                url: `/follower/${id}`,
                method: "GET",
            }),
        }),

    }),
});

export const { useGetAllTrainerQuery, useGetSingleTrainerSessionQuery, useGetSingleTrainerQuery, useGetMembersQuery, useGetMyFollowersQuery } = trainerApi;

export default trainerApi;
