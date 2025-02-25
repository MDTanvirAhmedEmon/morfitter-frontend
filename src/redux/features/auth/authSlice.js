import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  role: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;
    },
  },
});

export const { setToken, setUser, logout, setRole } = authSlice.actions;

export default authSlice.reducer;
