'use client';

import { useState, useLayoutEffect } from 'react';

import PlaylistLists from '@/components/layout/lists/PlaylistLists';
import useAudius from '@/hooks/useAudius';

const PlaylistContainer = () => {
  const [playlists, setPlaylists] = useState([]);

  const { getTrendingPlaylist } = useAudius();

  useLayoutEffect(() => {
    getTrendingPlaylist().then((res) => {
      setPlaylists(res.data.slice(0, 4));
    });
  }, []);

  return (
    <section className="my-10">
      <h3 className="text-2xl font-medium mb-4 text-gray-700">
        Trending Playlists
      </h3>

      {playlists.length > 0 && <PlaylistLists playlists={playlists} />}
    </section>
  );
};
export default PlaylistContainer;
