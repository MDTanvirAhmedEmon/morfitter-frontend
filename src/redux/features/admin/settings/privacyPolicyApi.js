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
      query: (data, _id) => ({
        url: `/policy-term/policy/${_id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPrivacyQuery, useUpdatePrivacyMutation } =
  privacyPolicyApi;

export default privacyPolicyApi;
