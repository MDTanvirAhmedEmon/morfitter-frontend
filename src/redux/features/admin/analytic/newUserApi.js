"use client";
import { baseApi } from "@/redux/api/baseApi";

const newUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNewUsers: builder.query({
      query: (params) => ({
        url: "/users/new-users",
        method: "GET",
        params,
      }),
      providesTags: ["new-users"],
    }),
  }),
});

export const { useGetAllNewUsersQuery } = newUserApi;

export default newUserApi;
