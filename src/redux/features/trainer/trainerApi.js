import { baseApi } from "@/redux/api/baseApi";

const trainerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        
        getAllTrainer: builder.query({
            query: (params) => ({
                url: `/trainer`,
                method: "GET",
                params,
            }),
        }),

        updateTrainer: builder.mutation({
            query: ({ data, id }) => ({
                url: `/trainer/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['user']
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

export const { useGetAllTrainerQuery, useUpdateTrainerMutation , useGetSingleTrainerSessionQuery, useGetSingleTrainerQuery, useGetMembersQuery, useGetMyFollowersQuery } = trainerApi;

export default trainerApi;
