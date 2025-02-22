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

    }),
});

export const {
    useChangeAdminPasswordMutation,
} =
    profileApi;

export default profileApi;
