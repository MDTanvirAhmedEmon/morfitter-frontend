import { baseApi } from "@/redux/api/baseApi";

const sessionApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        createSession: builder.mutation({
            query: (formData) => ({
                url: "/session/create",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ['session']
        }),
        getMySession: builder.query({
          query: (id) => ({
            url: `/session/${id}`,
            method: "GET",
          }),
          providesTags: ['session']
        }),
    }),
});

export const {
    useCreateSessionMutation,
    useGetMySessionQuery,
} = sessionApi;

export default sessionApi;
