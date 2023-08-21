'use client';

import Image from 'next/image';

const PlayBtn = ({ isPlaying, handleSongControl, playPauseBtnRef, style }) => {
  return (
    <button
      className={`p-3 border rounded-full ${style}`}
      onClick={handleSongControl}
      ref={playPauseBtnRef}
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
  );
};

export default PlayBtn;
