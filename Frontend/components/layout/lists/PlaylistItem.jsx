'use client';

import Image from 'next/image';

import useAudius from '@/hooks/useAudius';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const PlaylistItem = ({ id, playlistName, playlistImage }) => {
  const { getPlaylistTracks } = useAudius();
  const [tracks, setTracks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getPlaylistTracks(id).then((data) => {
      setTracks(data);
    });
  }, []);

  const handlePlaylistClick = () => {
    router.push(`/users/playlists/${id}`);
  };

  return (
    <section
      className="flex justify-between items-center hover:bg-gray-50/5 rounded-lg mb-2 cursor-pointer p-2"
      onClick={handlePlaylistClick}
    >
      <div className="flex gap-5 items-center h-20 w-1/2">
        <Image
          src={playlistImage && playlistImage['150x150']}
          alt={playlistName}
          width={80}
          height={80}
          className="h-20 w-20 rounded-md bg-white"
        />

        <h4 className="font-medium text-xl text-white">{playlistName}</h4>
      </div>

      <p className="mx-auto text-gray-500">
        {(tracks && tracks.data ? tracks.data.length : '0') + ' Tracks'}
      </p>

      <Image src="/visit-arrow.svg" alt="Play" width={28} height={28} />
    </section>
  );
};

export default PlaylistItem;
