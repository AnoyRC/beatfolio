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
    const config = {
      headers: {
        "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
        "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
      },
    };

    axios
      .get(
        `https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts?page=1&perPage=50`,
        config
      )
      .then((res) => {
        res.data.forEach((user) => {
          if (user.id === publicKey) {
            return user;
          }
        });
      })
      .catch((err) => {
        return null;
      });
  }
);

export const fetchSong = createAsyncThunk("song/fetchSong", async (id) => {
  const config = {
    headers: {
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  axios
    .get(
      "https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts?page=1&perPage=50",
      config
    )
    .then((res) => {
      res.data.forEach((song) => {
        if (song.id === id) {
          return song;
        }
      });
    })
    .catch((err) => {
      return null;
    });
});

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const config = {
      headers: {
        "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
        "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
      },
    };

    axios
      .get(
        "https://staging.crossmint.com/api/2022-06-09/collections/0e249985-9d8e-443a-8f17-32b4f9e12592/nfts?page=1&perPage=50",
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return null;
      });
  }
);

export const fetchAllSongs = createAsyncThunk(
  "song/fetchAllSongs",
  async () => {
    const config = {
      headers: {
        "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
        "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
      },
    };

    axios
      .get(
        "https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts?page=1&perPage=50",
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return null;
      });
  }
);

export const fetchUserSongs = createAsyncThunk(
  "song/fetchUserSongs",
  async (publicKey) => {
    const config = {
      headers: {
        "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
        "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
      },
    };

    axios
      .get(
        "https://staging.crossmint.com/api/2022-06-09/collections/c3d92820-7264-443c-a859-4857d6832c28/nfts?page=1&perPage=50",
        config
      )
      .then((res) => {
        return res.data.filter((song) => {
          return song.onChain.owner === publicKey;
        });
      })
      .catch((err) => {
        return null;
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
