'use client';

import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { openAddPlaylistModal } from '@/redux/modalSlice';

const AddPlaylist = () => {
  const dispatch = useDispatch();

  const handlePlaylists = () => {
    dispatch(openAddPlaylistModal());
  };

  return (
    <button className="sticky bottom-10 left-full mr-5 backdrop-blur p-4 rounded-full bg-white/20 overflow-hidden hover:border border-white active:scale-95">
      <Image
        src="/profile/close.svg"
        alt="Add"
        width={28}
        height={28}
        onClick={handlePlaylists}
        className="rotate-45"
      />
    </button>
  );
};

export default AddPlaylist;
