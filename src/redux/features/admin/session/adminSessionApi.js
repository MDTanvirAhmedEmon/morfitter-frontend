import { baseApi } from "@/redux/api/baseApi";

const adminSessionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    blockUnblockSession: builder.mutation({
      query: (id) => ({
        url: `/session/block-unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["session"],
    }),

  }),
});

export const { useBlockUnblockSessionMutation  } = adminSessionApi;

export default adminSessionApi;
