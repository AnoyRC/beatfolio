import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignupOpen: false,
  isUploadOpen: false,
  isAddPlaylistOpen: false,
  isAddToPlaylistOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.isSignupOpen = true;
    },
    closeSignupModal: (state) => {
      state.isSignupOpen = false;
    },
    openUploadModal: (state) => {
      state.isUploadOpen = true;
    },
    closeUploadModal: (state) => {
      state.isUploadOpen = false;
    },
    openAddPlaylistModal: (state) => {
      state.isAddPlaylistOpen = true;
    },
    closeAddPlaylistModal: (state) => {
      state.isAddPlaylistOpen = false;
    },
    openAddToPlaylistModal: (state) => {
      state.isAddToPlaylistOpen = true;
    },
    closeAddToPlaylistModal: (state) => {
      state.isAddToPlaylistOpen = false;
    },
  },
});

export const {
  openSignupModal,
  closeSignupModal,
  openUploadModal,
  closeUploadModal,
  openAddPlaylistModal,
  closeAddPlaylistModal,
} = modalSlice.actions;

export default modalSlice.reducer;
