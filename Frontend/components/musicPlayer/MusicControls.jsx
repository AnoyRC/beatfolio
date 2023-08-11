'use client';

import { useState } from 'react';
import MusicProgressBar from './MusicProgressBar';
import PlayerMenu from './PlayerMenu';
import Like from '../ui/Like';
import Volume from './Volume';

const MusicControls = ({ isLiked, endTime, maxWidth }) => {
  const [isInPlaylist, setIsInPlaylist] = useState(false);

  return (
    <div className="flex flex-1">
      <Like liked={isLiked} />

      <MusicProgressBar endTime={endTime} maxWidth={maxWidth} />

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
  );
};

export default MusicControls;
