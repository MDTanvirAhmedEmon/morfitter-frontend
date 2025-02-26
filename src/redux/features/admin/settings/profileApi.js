import { baseApi } from "@/redux/api/baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changeAdminPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/change-admin-password`,
        method: "POST",
        body: data,
      }),
    }),

    updateAdmin: builder.mutation({
      query: (data) => ({
        url: `/admin/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["admin"], // ✅ This works better with providesTags
    }),

    getAdminProfile: builder.query({
      query: () => `/admin/profile`,
      providesTags: ["admin"], // ✅ Ensures cache is updated
    }),
  }),
});

export const {
  useChangeAdminPasswordMutation,
  useUpdateAdminMutation,
  useGetAdminProfileQuery, // ✅ Added this for fetching profile data
} = profileApi;

export default profileApi;
