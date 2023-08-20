'use client';

import TrackLists from '@/components/layout/lists/TrackLists';
import useAudius from '@/hooks/useAudius';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const { getPlaylistTracks } = useAudius();
  const { id } = useParams();
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    getPlaylistTracks(id).then((res) => {
      setTracks(res.data);
    });
  }, []);

  return (
    tracks && (
      <section>
        <TrackLists tracks={tracks} />
      </section>
    )
  );
}
