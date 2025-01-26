import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  profile: null,
  info: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const  profile  = action.payload;
      state.profile = profile;
    },
    setInfo: (state, action) => {
      const  info  = action.payload;
      state.info = info;
    },
    clearRegisterInfo: (state) => {
      state.profile = null;
      state.info = null;
    },
  },
});

export const { setProfile, setInfo, clearRegisterInfo } = registerSlice.actions;

export default registerSlice.reducer;