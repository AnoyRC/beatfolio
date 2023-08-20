import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  publicKey: '',
  name: '',
  description: '',
  image: '',
};

export const currentUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updatePublicKey: (state, action) => {
      state.publicKey = action.payload;
    },
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.image = action.payload.image;
    },
    removeUser: (state) => {
      state.username = '';
      state.publicKey = '';
      state.description = '';
      state.image = '';
    },
  },
});

export const { updatePublicKey, updateUser, removeUser } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
