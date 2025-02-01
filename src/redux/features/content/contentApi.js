import { baseApi } from "@/redux/api/baseApi";

const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContents: builder.query({
      query: (params) => ({
        url: "/content",
        method: "GET",
        params,
      }),
      providesTags: ['content']
    }),


    createContent: builder.mutation({
      query: (formData) => ({
        url: "/content/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ['content']
    }),

    getMyContent: builder.query({
      query: (params) => ({
        url: "/content/my-content",
        method: "GET",
        params
      }),
      providesTags: ['content']
    }),

  }),
});

export const { useGetAllContentsQuery, useCreateContentMutation, useGetMyContentQuery } = contentApi;

export default contentApi;
