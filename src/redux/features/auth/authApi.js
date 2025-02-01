import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrainee: builder.mutation({
      query: (data) => ({
        url: "/users/create-trainee",
        method: "POST",
        body: data,
      }),
    }),

    createTrainer: builder.mutation({
      query: (data) => ({
        url: "/users/create-trainer",
        method: "POST",
        body: data,
      }),
    }),

    logIn: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    logInAdmin: builder.mutation({
      query: (data) => ({
        url: "/auth/login-admin",
        method: "POST",
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/admin/auth/change-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-code",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/users/get-me",
        method: "GET",
      }),
      providesTags: ['user']
    }),

  }),
});

export const {
  useCreateTraineeMutation,
  useCreateTrainerMutation,
  useLogInMutation,
  useLogInAdminMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useGetMeQuery,
} = authApi;

export default authApi;
