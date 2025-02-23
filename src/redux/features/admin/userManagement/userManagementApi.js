import { baseApi } from "@/redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getallUserManagement: builder.query({
      query: (params) => ({
        url: "/trainee/dashboard",
        method: "GET",
        params,
      }),
      providesTags: ["user-management"],
    }),

    updateUser: builder.mutation({
      query: (id) => ({
          url: `/users/block-unblock/${id}`,
          method: "PATCH",
      }),
      invalidatesTags: ['user-management']
  }),
  }),
});

export const { useGetallUserManagementQuery, useUpdateUserMutation } = userManagementApi;

export default userManagementApi;
