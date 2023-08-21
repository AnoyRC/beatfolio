'use client';

import { useState } from 'react';
import MusicProgressBar from './MusicProgressBar';
import PlayerMenu from './PlayerMenu';
import Like from '../ui/Like';
import Volume from './Volume';

const MusicControls = ({
  setIsPlaying,
  songPlayerRef,
  progressBarRef,
  isLiked,
  maxWidth,
  source,
}) => {
  const [isInPlaylist, setIsInPlaylist] = useState(false);
  console.log(source);
  return (
    source && (
      <div className="flex flex-1">
        <Like liked={isLiked} />

        <audio ref={songPlayerRef}>
          <source src={source} type="audio/mpeg" />
        </audio>
        <MusicProgressBar
          setIsPlaying={setIsPlaying}
          songPlayerRef={songPlayerRef}
          progressBarRef={progressBarRef}
          maxWidth={maxWidth}
        />

        <div className="flex">
          <Volume />
          <PlayerMenu
            placement="top-end"
            animate={{
              mount: { scale: 1, y: 0, x: 0 },
              unmount: { scale: 0, y: 160, x: 80 },
            }}
          />
        </div>
      </div>
    )
  );
};

export default MusicControls;
