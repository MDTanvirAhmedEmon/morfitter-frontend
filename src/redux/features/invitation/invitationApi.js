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
            query: (data) => ({
                url: `/invitation/reject-invitation`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['invitation']
        }),

    }),
});

export const {
    useCreateInvitationMutation,
    useGetTraineeForSentInvitationQuery,
    useGetMyInvitationQuery,
    useRejectInvitationMutation,
  } = invitationApi;

export default invitationApi;
