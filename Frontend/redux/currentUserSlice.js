import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  publicKey: '',
};

export const currentUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updatePublicKey: (state, action) => {
      state.publicKey = action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    removeUser: (state) => {
      state.username = '';
      state.publicKey = '';
    },
  },
});

export const { updatePublicKey, updateUsername, removeUser } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
