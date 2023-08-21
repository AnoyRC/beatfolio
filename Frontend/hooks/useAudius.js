export default function useAudius() {
  const getUserTracks = async (id) => {
    const res = await fetch(
      `https://audius-metadata-4.figment.io/v1/users/${id}/tracks?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const getUndergroundTracks = async () => {
    const res = await fetch(
      'https://dn-jpn.audius.metadata.fyi/v1/tracks/trending/underground?app_name=EXAMPLEAPP'
    );

    return res.json();
  };

  const getUser = async (id) => {
    const res = await fetch(
      `https://audius-discovery-17.cultur3stake.com/v1/users/${id}?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const getUserFavTracks = async (id) => {
    const res = await fetch(
      `https://discovery-us-01.audius.openplayer.org/v1/users/${id}/favorites?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const searchUser = async (query) => {
    const headers = {
      Accept: 'application/json',
    };

    fetch(
      `https://dn2.monophonic.digital/v1/users/search?query=${query}&app_name=EXAMPLEAPP`,
      {
        method: 'GET',

        headers: headers,
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };

  const getFollowers = async (id) => {
    const headers = {
      Accept: 'application/json',
    };

    fetch(
      `https://dn2.monophonic.digital/v1/users/${id}/followers?app_name=EXAMPLEAPP`,
      {
        method: 'GET',

        headers: headers,
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };

  const getFollowing = async (id) => {
    const headers = {
      Accept: 'application/json',
    };

    fetch(
      `https://dn2.monophonic.digital/v1/users/${id}/following?app_name=EXAMPLEAPP`,
      {
        method: 'GET',

        headers: headers,
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };

  const getPlaylist = async (id) => {
    const res = await fetch(
      `https://dn2.monophonic.digital/v1/playlists/${id}?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const getTrendingPlaylist = async () => {
    const res = await fetch(
      'https://dn2.monophonic.digital/v1/playlists/trending?app_name=EXAMPLEAPP'
    );

    return res.json();
  };

  const getPlaylistTracks = async (id) => {
    const res = await fetch(
      `https://dn2.monophonic.digital/v1/playlists/${id}/tracks?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const getTrack = async (id) => {
    const res = await fetch(
      `https://audius-metadata-4.figment.io/v1/tracks/${id}?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const getBulkTracks = async () => {
    const headers = {
      Accept: 'application/json',
    };

    fetch(
      'https://dn2.monophonic.digital/v1/tracks?permalink=/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725&app_name=EXAMPLEAPP',
      {
        method: 'GET',

        headers: headers,
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };

  const getTrendingTracks = async () => {
    const res = await fetch(
      'https://dn2.monophonic.digital/v1/tracks/trending?app_name=EXAMPLEAPP'
    );

    return res.json();
  };

  const streamTrack = async (id) => {
    const res = await fetch(
      `https://blockchange-audius-discovery-02.bdnodes.net/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP`
    );

    return res.json();
  };

  const searchTrack = async (query) => {
    const headers = {
      Accept: 'application/json',
    };

    fetch(
      `https://dn2.monophonic.digital/v1/tracks/search?query=${query}&app_name=EXAMPLEAPP`,
      {
        method: 'GET',

        headers: headers,
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };

  return {
    getUser,
    getUserTracks,
    getUndergroundTracks,
    getUserFavTracks,
    searchUser,
    getFollowers,
    getFollowing,
    getPlaylist,
    getTrendingPlaylist,
    getPlaylistTracks,
    getTrack,
    getBulkTracks,
    getTrendingTracks,
    streamTrack,
    searchTrack,
  };
}
