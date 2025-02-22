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
            invalidatesTags: ['admin']
        }),

    }),
});

export const {
    useChangeAdminPasswordMutation,
    useUpdateAdminMutation,
} =
    profileApi;

export default profileApi;
