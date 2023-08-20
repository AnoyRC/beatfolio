'use client';

import FeedsContainer from '@/components/layout/feeds/FeedsContainer';

import useAudius from '@/hooks/useAudius';
import { useState, useEffect } from 'react';

export default function Home() {
  const { getTrendingTracks } = useAudius();
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    getTrendingTracks().then((res) => {
      setTracks(res.data);
    });
  }, []);

  return <>{tracks && <FeedsContainer songs={tracks} />}</>;
}
