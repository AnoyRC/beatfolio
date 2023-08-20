'use client';

import PlaylistLists from '@/components/layout/lists/PlaylistLists';
import useAudius from '@/hooks/useAudius';
import { useState, useLayoutEffect } from 'react';

export default function Page() {
  const [playlists, setPlaylists] = useState([]);

  const { getTrendingPlaylist } = useAudius();

  useLayoutEffect(() => {
    getTrendingPlaylist().then((res) => {
      setPlaylists(res.data);
    });
  }, []);

  return (
    <section>
      {playlists.length > 0 && <PlaylistLists playlists={playlists} />}
    </section>
  );
}
