import { baseApi } from "@/redux/api/baseApi";

const adminSessionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSessionForAdmin: builder.query({
      query: (params) => ({
        url: `/session/admin`,
        method: "GET",
        params
      }),
      providesTags: ['session']
    }),
    blockUnblockSession: builder.mutation({
      query: (id) => ({
        url: `/session/block-unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["session"],
    }),

  }),
});

export const { useGetAllSessionForAdminQuery , useBlockUnblockSessionMutation  } = adminSessionApi;

export default adminSessionApi;
