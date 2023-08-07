'use client';

import Image from 'next/image';
import { useState } from 'react';

const MusicControls = ({ endTime, maxWidth }) => {
  const [isLiked, setIsLiked] = useState(true);
  const [isInPlaylist, setIsInPlaylist] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const onVolumeClick = () => {
    console.log('onVolumeClick');
  };

  const onMenuClick = () => {
    console.log('onMenuClick');
  };

  return (
    <div className="flex flex-1">
      {isLiked ? (
        <Image
          src="/music-player/red-like.svg"
          className="cursor-pointer"
          width={28}
          height={28}
          onClick={toggleLike}
          alt="like button"
        />
      ) : (
        <Image
          src="/music-player/like.svg"
          className="cursor-pointer"
          width={28}
          height={28}
          onClick={toggleLike}
          alt="like button"
        />
      )}

      <div className="flex items-center w-full mx-10">
        <p className="text-gray-700">0:00</p>

        <div
          className={`h-[5px] w-full rounded-full overflow-hidden relative mx-3 ${
            maxWidth ? maxWidth : ''
          }`}
        >
          <div className={`bg-gray-700 w-full h-full`}></div>
          <div
            style={{ width: '100px' }}
            className="h-full bg-white z-10 rounded-full absolute top-0 left-0"
          ></div>
        </div>

        <p className="text-gray-700">{endTime ? endTime : '4:00'}</p>
      </div>

      <div className="flex">
        <Image
          src="/music-player/volume.svg"
          width={28}
          height={28}
          className="cursor-pointer mr-6"
          onClick={onVolumeClick}
          alt="volume button"
        />

        <Image
          src="/music-player/menu.svg"
          width={28}
          height={28}
          className="cursor-pointer"
          onClick={onMenuClick}
          alt="menu button"
        />
      </div>
    </div>
  );
};

export default MusicControls;
