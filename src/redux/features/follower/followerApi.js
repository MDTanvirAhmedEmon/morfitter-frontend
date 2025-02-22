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

        getSingleUser: builder.query({
            query: (id) => ({
              url: `/users/view-user/${id}`,
              method: "GET",
            }),
            providesTags: ['follow']
          }),
        getWhoIAmFollowing: builder.query({
            query: (id) => ({
                url: `/follower/following/${id}`,
                method: "GET",
            }),
        }),
        dofolowUnfollow: builder.mutation({
            query: (data) => ({
                url: `/follower`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['follow']
        }),
        
    }),
});

export const {
    useGetSingleUserQuery,
    useGetWhoIAmFollowingQuery,
    useDofolowUnfollowMutation,
} = followerApi;

export default followerApi;
