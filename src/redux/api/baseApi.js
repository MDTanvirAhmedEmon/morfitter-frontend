import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { message } from "antd";
import { logout, setRole, setToken } from "../features/auth/authSlice";
import Cookies from "js-cookie";
import { decodedToken } from "@/utils/VerifyJwtToken";

const baseQuery = fetchBaseQuery({
  // baseUrl: `/api/v1`,
  baseUrl: `http://localhost:5000/api/v1`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // const token = getState()?.auth?.token;
    const token = Cookies.get('morfitter-token');
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
    const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      api.dispatch(logout());
      window.location.href = '/auth/login';
      return result;
    }
    const data = await res.json();

    if (data?.data?.accessToken) {
      const verifiedToken = decodedToken(data?.data?.accessToken);
      api.dispatch(setRole(verifiedToken));
      api.dispatch(setToken(data.data.accessToken));
      Cookies.set('morfitter-token', data?.data?.accessToken)
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      window.location.href = '/auth/login';
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
    "follow",
    'admin',
    'policy',
    'admin-content',
  ],
  endpoints: () => ({}),
});
