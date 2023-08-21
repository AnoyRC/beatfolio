import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignupOpen: false,
  isUploadOpen: false,
  isAddPlaylistOpen: false,
  isAddToPlaylistOpen: false,
  isConnected: false,
  isMusicModalOpen: false,
  isAddSongOpen: false,
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
    connectWallet: (state) => {
      state.isConnected = true;
    },
    disconnectWallets: (state) => {
      state.isConnected = false;
    },
    openMusicModal: (state) => {
      state.isMusicModalOpen = true;
    },
    closeMusicModal: (state) => {
      state.isMusicModalOpen = false;
    },
    openAddSongModal: (state) => {
      state.isAddSongOpen = true;
    },
    closeAddSongModal: (state) => {
      state.isAddSongOpen = false;
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
  openAddToPlaylistModal,
  closeAddToPlaylistModal,
  connectWallet,
  disconnectWallets,
  openMusicModal,
  closeMusicModal,
  openAddSongModal,
  closeAddSongModal,
} = modalSlice.actions;

export default modalSlice.reducer;
