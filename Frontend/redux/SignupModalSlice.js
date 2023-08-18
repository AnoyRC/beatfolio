import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const signupModalSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.isOpen = true;
    },
    closeSignupModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const {} = signupModalSlice.actions;

export default signupModalSlice.reducer;
