import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/trainee/analytics",
        method: "GET",
        params,
      }),
      providesTags: ["all-users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;

export default userApi;
