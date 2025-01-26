import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  token: null,
  role: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    setRole: (state, action) => {
      const role = action.payload;
      state.role = role;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setToken, setUser, logout, setRole } = authSlice.actions;

export default authSlice.reducer;