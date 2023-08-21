'use client';

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import { closeMusicModal } from '@/redux/modalSlice';

const MusicDetails = ({ id, songPhoto, songName, singerName }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleArtistClick = () => {
    router.push(`/users/profile/${id}`);
    dispatch(closeMusicModal());
  };

  return (
    <div
      className="flex mr-10 hover:bg-gray-900/80 rounded-lg p-1 cursor-pointer"
      onClick={handleArtistClick}
    >
      <div className="rounded-lg overflow-hidden">
        {songPhoto ? (
          <Image src={songPhoto} alt="songPhoto" width={58} height={58} />
        ) : (
          <div className="w-14 h-14 bg-white"></div>
        )}
      </div>

      <div className="ml-4">
        <p className="text-xl font-semibold">
          {songName ? songName : 'Song Name'}
        </p>
        <p className="text-gray-600">
          {singerName ? singerName : 'Singer Name'}
        </p>
      </div>
    </div>
  );
};

export default MusicDetails;
