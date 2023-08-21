import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: null,
  currentSong: null,
  AllSongs: null,
  AllUsers: null,
  userSongs: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "crossmint/fetchUser",
  async (publicKey) => {
    try {
      const res = await axios.get(
        `https://beatfolio.dotcombackend.me/api/crossmint/fetch/user/${publicKey}`
      );
      return res.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const fetchSong = createAsyncThunk("crossmint/fetchSong", async (id) => {
  try {
    try {
      const audiusRes = await axios.get(
        `https://audius-metadata-4.figment.io/v1/tracks/${id}?app_name=EXAMPLEAPP`
      );

      return audiusRes.data;
    } catch (err) {
      console.log(err);
    }

    const res = await axios.get(
      `https://beatfolio.dotcombackend.me/api/crossmint/fetch/song/${id}`
    );

    return res.data;
  } catch (err) {
    throw new Error(err);
  }
});

export const fetchAllUsers = createAsyncThunk(
  "crossmint/fetchAllUsers",
  async () => {
    try {
      const res = await axios.get(
        "https://beatfolio.dotcombackend.me/api/crossmint/user/all"
      );

      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const fetchAllSongs = createAsyncThunk(
  "crossmint/fetchAllSongs",
  async () => {
    try {
      const res = await axios.get(
        "https://beatfolio.dotcombackend.me/api/crossmint/song/all"
      );

      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const fetchUserSongs = createAsyncThunk(
  "crossmint/fetchUserSongs",
  async (publicKey) => {
    try {
      const res = await axios.get(
        `https://beatfolio.dotcombackend.me/api/crossmint/song/user/${publicKey}`
      );
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const crossmintSlice = createSlice({
  name: "crossmint",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchSong.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSong.fulfilled, (state, action) => {
        state.currentSong = action.payload;
        state.loading = false;
      })
      .addCase(fetchSong.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.AllUsers = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchAllSongs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllSongs.fulfilled, (state, action) => {
        state.AllSongs = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllSongs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchUserSongs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserSongs.fulfilled, (state, action) => {
        state.userSongs = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserSongs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default crossmintSlice.reducer;

export const { setCurrentUser } = crossmintSlice.actions;
