import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const  token  = action.payload;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;