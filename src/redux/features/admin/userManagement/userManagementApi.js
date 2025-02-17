import { baseApi } from "@/redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getallUserManagement: builder.query({
      query: (params) => ({
        url: "trainee/dashboard",
        method: "GET",
        params,
      }),
      providesTags: ["user-management"],
    }),
  }),
});

export const { useGetallUserManagementQuery } = userManagementApi;

export default userManagementApi;
