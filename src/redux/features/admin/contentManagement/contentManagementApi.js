import { baseApi } from "@/redux/api/baseApi";

const contentManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContentsForAdmin: builder.query({
      query: (params) => ({
        url: "/content/admin",
        method: "GET",
        params,
      }),
      providesTags: ['admin-content']
    }),

    blockUnblockContent: builder.mutation({
      query: (id) => ({
        url: `/content/block-unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ['admin-content']
    }),
  }),
});


export const { useGetAllContentsForAdminQuery, useBlockUnblockContentMutation } = contentManagementApi;

export default contentManagementApi;
