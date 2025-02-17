import { baseApi } from "@/redux/api/baseApi";

const privacyPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacy: builder.query({
      query: () => ({
        url: "policy-term/policy",
        method: "GET",
      }),
    }),

    updatePrivacy: builder.mutation({
      query: (data, _id) => {
        console.log("privacy api", data, _id);
        const { policyId, ...privacy } = data;
        return {
          url: `policy-term/policy/${policyId}`,
          method: "PATCH",
          body: privacy,
        };
      },
    }),
  }),
});

export const { useGetPrivacyQuery, useUpdatePrivacyMutation } =
  privacyPolicyApi;

export default privacyPolicyApi;
