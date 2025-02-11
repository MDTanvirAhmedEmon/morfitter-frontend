import { baseApi } from "@/redux/api/baseApi";

const followerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // updateTrainerProfile: builder.mutation({
        //     query: ({ data, id }) => ({
        //         url: `/trainer/${id}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ['user']
        // }),

        // updateTraineeProfile: builder.mutation({
        //     query: ({ data, id }) => ({
        //         url: `/trainee/${id}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ['user']
        // }),

        getWhoIAmFollowing: builder.query({
            query: (id) => ({
                url: `/follower/following/${id}`,
                method: "GET",
            }),
        }),

    }),
});

export const {
    useGetWhoIAmFollowingQuery,
} = followerApi;

export default followerApi;
