import { baseApi } from "@/redux/api/baseApi";

const privacyPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminInfo: builder.query({
      query: () => "/admin/get-admin-info",
      transformResponse: (response) => response.data, // ✅ Extract data correctly
      providesTags: ["admin"],
    }),

    getPrivacyPolicy: builder.query({
      query: () => "/policy-term/policy",
      transformResponse: (response) => response.data, // ✅ Ensure correct data format
      providesTags: ["policy"],
    }),

    addPrivacyPolicy: builder.mutation({
      query: (data) => ({
        url: "/policy-term/create-policy",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["policy"],
    }),

    updatePrivacyPolicy: builder.mutation({
      query: ({ id, data }) => ({
        url: `/policy-term/policy/${id}`,
        method: "PATCH",
        body: data, // ✅ Fixed potential undefined issue
      }),
      invalidatesTags: ["policy"],
    }),
  }),
});

export const {
  useGetAdminInfoQuery,
  useGetPrivacyPolicyQuery,
  useAddPrivacyPolicyMutation,
  useUpdatePrivacyPolicyMutation,
} = privacyPolicyApi;

export default privacyPolicyApi;
