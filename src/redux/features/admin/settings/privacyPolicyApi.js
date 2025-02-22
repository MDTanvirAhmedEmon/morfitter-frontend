import { baseApi } from "@/redux/api/baseApi";

const privacyPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminInfo: builder.query({
      query: () => ({
        url: "/admin/get-admin-info",
        method: "GET",
      }),
      providesTags: ['admin']
    }),

    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `/policy-term/policy`,
        method: 'GET',
      }),
      providesTags: ['policy']
    }),
    addPrivacyPolicy: builder.mutation({
      query: (data) => ({
        url: `/policy-term/create-policy`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['policy']
    }),
    updatePrivacyPolicy: builder.mutation({
      query: ({ id, data }) => ({
        url: `/policy-term/policy/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['policy']
    }),
  }),
});

export const { 
  useGetAdminInfoQuery,
  useGetPrivacyPolicyQuery,
  useAddPrivacyPolicyMutation,
  useUpdatePrivacyPolicyMutation

} =
  privacyPolicyApi;

export default privacyPolicyApi;
