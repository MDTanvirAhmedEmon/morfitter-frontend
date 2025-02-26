"use client";
import { baseApi } from "@/redux/api/baseApi";

const trainerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTrainers: builder.query({
      query: (params) => ({
        url: "trainer/analytics",
        method: "GET",
        params,
      }),
      providesTags: ["all-trainers"],
    }),
  }),
});

export const { useGetAllTrainersQuery } = trainerApi;

export default trainerApi;
