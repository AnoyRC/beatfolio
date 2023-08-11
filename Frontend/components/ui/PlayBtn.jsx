'use client';

import { useState } from 'react';
import Image from 'next/image';

const PlayBtn = ({ style }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <button className={`p-3 border rounded-full ${style}`} onClick={togglePlay}>
      {isPlaying ? (
        <Image
          src="/music-player/pause.svg"
          width={28}
          height={28}
          alt="pause button"
        />
      ) : (
        <Image
          src="/music-player/play.svg"
          width={28}
          height={28}
          alt="play button"
        />
      )}
    </button>
  );
};

export default PlayBtn;
