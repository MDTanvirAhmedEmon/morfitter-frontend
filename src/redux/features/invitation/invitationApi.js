import { baseApi } from "@/redux/api/baseApi";

const invitationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createInvitation: builder.mutation({
            query: (data) => ({
                url: `/invitation/sent-invitation`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['invitation']
        }),

        getTraineeForSentInvitation: builder.query({
            query: ({id, searchTerm}) => ({
                url: `/invitation/get-trainee/${id}`,
                method: "GET",
                params: {searchTerm},
            }),
            providesTags: ['invitation']
        }),

        getMyInvitation: builder.query({
            query: (id) => ({
                url: `/invitation/get-trainee-invitation/${id}`,
                method: "GET",
            }),
            providesTags: ['invitation']
        }),
        
        rejectInvitation: builder.mutation({
            query: (id) => ({
                url: `/invitation/reject-invitation/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['invitation']
        }),

        giveReview: builder.mutation({
            query: (data) => ({
                url: `/review/give-review`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['invitation']
        }),

        getReview: builder.query({
            query: (id) => ({
                url: `/review/get-review/${id}`,
                method: "GET",
            }),
            providesTags: ['invitation']
        }),

    }),
});

export const {
    useCreateInvitationMutation,
    useGetTraineeForSentInvitationQuery,
    useGetMyInvitationQuery,
    useRejectInvitationMutation,
    useGiveReviewMutation,
    useGetReviewQuery
  } = invitationApi;

export default invitationApi;
