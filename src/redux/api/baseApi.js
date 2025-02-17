import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { message } from "antd";
import { logout, setToken } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  // baseUrl: `http://10.0.60.166:5000/api/v1`,
  baseUrl: `http://localhost:5000/api/v1`,

  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    message.error(result.error.data.message);
  }
  if (result?.error?.status === 403) {
    message.error(result.error.data.message);
  }

  if (result?.error?.status === 401) {
    const res = await fetch(
      `http://10.0.60.166:5000/api/v1/auth/refresh-token`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      api.dispatch(setToken(data.data.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "user",
    "content",
    "specialism",
    "qualification",
    "invitation",
    "comments",
    "session",
    "new-users",
    "all-trainers",
    "all-users",
    "all-personal-trainer",
    "user-management",
    "privacy",
  ],
  endpoints: () => ({}),
});
