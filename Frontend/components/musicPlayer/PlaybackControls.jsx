'use client';

import { useState } from 'react';
import Image from 'next/image';

const PlaybackControls = ({ margin }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="flex items-center mr-10">
      <button>
        <Image
          src="/music-player/previous.svg"
          width={28}
          height={28}
          alt="previous button"
        />
      </button>

      <button
        className={`p-3 bg-gray-700 rounded-full ${margin}`}
        onClick={togglePlay}
      >
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

      <button>
        <Image
          src="/music-player/next.svg"
          width={28}
          height={28}
          alt="next button"
        />
      </button>
    </div>
  );
};

export default PlaybackControls;
