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
        getSingleSession: builder.query({
          query: (id) => ({
            url: `/session/single/${id}`,
            method: "GET",
          }),
          providesTags: ['session']
        }),
        addSession: builder.mutation({
          query: ({formData, id}) => ({
              url: `/session/${id}`,
              method: "PATCH",
              body: formData,
          }),
          invalidatesTags: ['session']
      }),
    }),
});

export const {
    useCreateSessionMutation,
    useGetMySessionQuery,
    useGetSingleSessionQuery,
    useAddSessionMutation,
} = sessionApi;

export default sessionApi;
