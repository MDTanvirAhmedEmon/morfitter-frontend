import { baseApi } from "@/redux/api/baseApi";

const sessionApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    createSession: builder.mutation({
      query: (formData) => ({
        url: "/session/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ['session']
    }),
    getMySession: builder.query({
      query: (id) => ({
        url: `/session/${id}`,
        method: "GET",
      }),
      providesTags: ['session']
    }),
    getAllSession: builder.query({
      query: (params) => ({
        url: `/session`,
        method: "GET",
        params
      }),
      providesTags: ['session']
    }),
    getSingleSession: builder.query({
      query: (id) => ({
        url: `/session/single/${id}`,
        method: "GET",
      }),
      providesTags: ['session']
    }),
    addSession: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/session/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ['session']
    }),
    deletSessionVideo: builder.mutation({
      query: (data) => ({
        url: `/session/delete-video`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ['session']
    }),
    deletWholeSession: builder.mutation({
      query: (id) => ({
        url: `/session/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['session']
    }),

    // Enroll ======================
    enrollSession: builder.mutation({
      query: (data) => ({
        url: `/access/enroll`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['session']
    }),

    checkEnrollment: builder.mutation({
      query: (data) => ({
        url: `/access/check-existence`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['session']
    }),

    myEnrolledSession: builder.query({
      query: () => ({
        url: `/access/my-enrolled-session`,
        method: "GET",
      }),
    }),

    getTotalEntrolledUserSession: builder.query({
      query: (id) => ({
        url: `access/total-enrollment/${id}`,
        method: "GET",
      }),
    }),

  }),
});

export const {
  useCreateSessionMutation,
  useGetMySessionQuery,
  useGetAllSessionQuery,
  useGetSingleSessionQuery,
  useAddSessionMutation,
  useDeletSessionVideoMutation,
  useDeletWholeSessionMutation,
  useEnrollSessionMutation,
  useCheckEnrollmentMutation,
  useMyEnrolledSessionQuery,
  useGetTotalEntrolledUserSessionQuery,
} = sessionApi;

export default sessionApi;
