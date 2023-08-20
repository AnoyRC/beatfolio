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
  "user/fetchUser",
  async (publicKey) => {
    await axios
      .get(
        `https://dotcombackend/beatfolio/api/crossmint/fetch/user/${publicKey}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
);

export const fetchSong = createAsyncThunk("song/fetchSong", async (id) => {
  await axios
    .get(`https://dotcombackend/beatfolio/api/crossmint/fetch/song/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
});

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    await axios
      .get("https://dotcombackend/beatfolio/api/crossmint/user/all")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
);

export const fetchAllSongs = createAsyncThunk(
  "song/fetchAllSongs",
  async () => {
    await axios
      .get("https://dotcombackend/beatfolio/api/crossmint/song/all")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
);

export const fetchUserSongs = createAsyncThunk(
  "song/fetchUserSongs",
  async (publicKey) => {
    await axios
      .get(
        `https://dotcombackend/beatfolio/api/crossmint/song/user/${publicKey}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
);

export const crossmintSlice = createSlice({
  name: "crossmint",
  initialState,
  reducers: {},
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
