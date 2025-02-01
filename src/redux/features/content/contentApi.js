import { baseApi } from "@/redux/api/baseApi";

const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContents: builder.query({
      query: (params) => ({
        url: "/content",
        method: "GET",
        params,
      }),
    }),

    
    createContent: builder.mutation({
      query: (formData) => ({
        url: "/content/create",
        method: "POST",
        body: formData,
      }),
    }),

  }),
});

export const { useGetAllContentsQuery, useCreateContentMutation } = contentApi;

export default contentApi;
