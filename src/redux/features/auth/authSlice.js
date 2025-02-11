import { persistor } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';


const initialState = {
  token: null,
  role: null,
  user: null,
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
      state.token = null;
      state.role = null;
      state.user = null;
      persistStore(persistor).purge(); // Clears persisted state
    },
  },
});

export const { setToken, setUser, logout, setRole } = authSlice.actions;

export default authSlice.reducer;