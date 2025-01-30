import { baseApi } from "@/redux/api/baseApi";

const contentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContents: builder.query({
      query: (params = {}) => ({
        url: "/content",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetAllContentsQuery } = contentApi;

export default contentApi;


// ?searchTerm=some&page=1&limit=10&sortBy=createdAt&sortOrder=desc&specialism=TypeScript&role=trainee