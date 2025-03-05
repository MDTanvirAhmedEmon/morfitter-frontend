import { baseApi } from "@/redux/api/baseApi";

const chatsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // updateTrainerProfile: builder.mutation({
        //     query: ({ data, id }) => ({
        //         url: `/trainer/${id}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ['user']
        // }),

        getMessageWithOthers: builder.query({
            query: ({sender, receiver}) => ({
                url: `/chats/user-chats?sender=${sender}&receiver=${receiver}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetMessageWithOthersQuery,
} = chatsApi;

export default chatsApi;
