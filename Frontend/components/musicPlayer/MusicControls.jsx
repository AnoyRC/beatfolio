'use client';

import Image from 'next/image';
import { useState } from 'react';
import MusicProgressBar from './MusicProgressBar';
import PlayerMenu from './PlayerMenu';

const MusicControls = ({ endTime, maxWidth }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInPlaylist, setIsInPlaylist] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="flex flex-1">
      {isLiked ? (
        <Image
          src="/common/red-like.svg"
          className="cursor-pointer"
          width={28}
          height={28}
          onClick={toggleLike}
          alt="like button"
        />
      ) : (
        <Image
          src="/common/like.svg"
          className="cursor-pointer"
          width={28}
          height={28}
          onClick={toggleLike}
          alt="like button"
        />
      )}

      <MusicProgressBar endTime={endTime} maxWidth={maxWidth} />

      <PlayerMenu />
    </div>
  );
};

export default MusicControls;
