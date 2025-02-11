import { baseApi } from "@/redux/api/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updateTrainerProfile: builder.mutation({
            query: ({ data, id }) => ({
                url: `/trainer/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['user']
        }),

        updateTraineeProfile: builder.mutation({
            query: ({ data, id }) => ({
                url: `/trainee/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['user']
        }),

        // getMe: builder.query({
        //   query: () => ({
        //     url: "/users/get-me",
        //     method: "GET",
        //   }),
        // }),

    }),
});

export const {
    useUpdateTrainerProfileMutation,
    useUpdateTraineeProfileMutation,
} = profileApi;

export default profileApi;
