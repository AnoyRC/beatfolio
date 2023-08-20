'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAudius from '@/hooks/useAudius';

const ArtistItem = ({ id }) => {
  const [artist, setArtist] = useState(null);
  const { getUser } = useAudius();
  const router = useRouter();

  useEffect(() => {
    getUser(id).then((res) => {
      setArtist(res.data);
    });
  }, [id]);

  const handleArtistClick = () => {
    router.push(`/users/profile/${artist.id}`);
  };

  return (
    artist && (
      <section
        className="space-y-5 cursor-pointer p-2 hover:bg-gray-50/5 rounded-lg col-span-1"
        onClick={handleArtistClick}
      >
        <Image
          src={artist.profile_picture['480x480']}
          alt={artist.name}
          width={250}
          height={250}
          className="rounded-full"
        />

        <h3 className="text-center text-2xl ">{artist.name}</h3>
      </section>
    )
  );
};

export default ArtistItem;
