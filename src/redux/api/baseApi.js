import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { message } from "antd";
import Cookies from "js-cookie";
import { decodedToken } from "@/utils/VerifyJwtToken";
import { logout, setRole, setToken } from "../features/auth/authSlice"; // ✅ Ensure correct import

// API Base URL
const BASE_URL = `https://shiloh-morfitter-backend.vercel.app/api/v1`;

// ✅ Fetch base query with token setup
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("morfitter-token"); // Get token from Cookies
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

// ✅ Base Query with Refresh Token
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // ✅ Handle API errors with better debugging
  if (result?.error) {
    const { status, data } = result.error;

    if (status === 404 || status === 403) {
      message.error(data?.message || "Something went wrong.");
    }

    // ✅ Handle 401 (Unauthorized) - Refresh Token Logic
    if (status === 401) {
      try {
        const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
          method: "POST",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Refresh token expired");
        }

        const data = await res.json();
        if (data?.data?.accessToken) {
          const verifiedToken = decodedToken(data.data.accessToken);

          // ✅ Update Redux store with new token
          api.dispatch(setRole(verifiedToken));
          api.dispatch(setToken(data.data.accessToken));
          Cookies.set("morfitter-token", data.data.accessToken);

          // ✅ Retry original request with new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          throw new Error("Invalid refresh token response");
        }
      } catch (error) {
        console.error("Token refresh failed:", error);
        message.error("Session expired. Please log in again.");
        api.dispatch(logout());
        Cookies.remove("morfitter-token");
        window.location.href = "/auth/login";
      }
    }
  }

  return result;
};

// ✅ Create API with endpoints
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
    "admin",
    "policy",
    "terms",
    "admin-content",
  ],
  endpoints: () => ({}),
});

export default baseApi;
