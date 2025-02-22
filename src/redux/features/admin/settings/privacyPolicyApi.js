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
    getPrivacy: builder.query({
      query: () => ({
        url: "/policy-term/policy",
        method: "GET",
      }),
    }),

    updatePrivacy: builder.mutation({
      query: (data, _id) => {
        const { policyId, ...privacy } = data;
        return {
          url: `/policy-term/policy/${policyId}`,
          method: "PATCH",
          body: privacy,
        };
      },
    }),
  }),
});

export const { useGetPrivacyQuery, useUpdatePrivacyMutation, useGetAdminInfoQuery } =
  privacyPolicyApi;

export default privacyPolicyApi;
