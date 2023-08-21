import axios from 'axios';

export default function useWeb2() {
  const SignInUser = async (publicKey, signature) => {
    const body = JSON.stringify({
      address: publicKey,
      signature: signature,
    });

    axios
      .post('https://beatfolio.dotcombackend.me/api/auth', body)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CheckLoggedUser = async (publicKey) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .get('https://beatfolio.dotcombackend.me/api/auth', config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFollowers = async (publicKey) => {
    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/user/followers/${publicKey}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFollowing = async (publicKey) => {
    axios
      .get(`https://beatfolio.dotcombackend.me/api/user/following/${publicKey}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const followUser = async (publicKey, address) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/user/follow/${address}`,
        {},
        config
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unfollowUser = async (publicKey, address) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/user/unfollow/${address}`,
        {},
        config
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeSong = async (publicKey, songId) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/song/like/${songId}`,
        {},
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikeSong = async (publicKey, songId) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/song/unlike/${songId}`,
        {},
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLikes = async (songId) => {
    axios
      .get(`https://beatfolio.dotcombackend.me/api/song/likes/${songId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPlaylist = async (publicKey, playlistName) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    const body = JSON.stringify({
      name: playlistName,
    });

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/playlist/create`,
        body,
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPlaylist = async (playlistId) => {
    axios
      .get(`https://beatfolio.dotcombackend.me/api/playlist/${playlistId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllPlaylists = async () => {
    axios
      .get(`https://beatfolio.dotcombackend.me/api/playlist/all`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPlaylistByAddress = async (publicKey) => {
    axios
      .get(`https://beatfolio.dotcombackend.me/api/playlist/${publicKey}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addSongToPlaylist = async (publicKey, playlistId, songId) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/playlist/add/${playlistId}/${songId}`,
        {},
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeSongFromPlaylist = async (publicKey, playlistId, songId) => {
    const config = {
      headers: {
        'x-auth-token': localStorage.token,
        'x-address': publicKey,
      },
    };

    axios
      .post(
        `https://beatfolio.dotcombackend.me/api/playlist/remove/${playlistId}/${songId}`,
        {},
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSongsFromPlaylist = async (playlistId) => {
    axios
      .get(
        `https://beatfolio.dotcombackend.me/api/playlist/songs/${playlistId}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    SignInUser,
    CheckLoggedUser,
    getFollowers,
    getFollowing,
    followUser,
    unfollowUser,
    likeSong,
    unlikeSong,
    getLikes,
    createPlaylist,
    getPlaylist,
    getAllPlaylists,
    getPlaylistByAddress,
    addSongToPlaylist,
    removeSongFromPlaylist,
    getSongsFromPlaylist,
  };
}
