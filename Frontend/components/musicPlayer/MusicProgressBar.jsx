'use client';

import { useEffect, useState } from 'react';

const MusicProgressBar = ({
  setIsPlaying,
  songPlayerRef,
  progressBarRef,
  maxWidth,
}) => {
  const [progressValue, setProgressValue] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (songPlayerRef.current.play) {
      // setInterval(() => {
      //   setProgressValue(songPlayerRef.current?.currentTime);
      //   setEndTime(songPlayerRef.current?.duration);
      // }, 1000);
    }
  }, []);

  return (
    <div className="flex items-center w-full mx-10">
      <p className="text-gray-700">
        {progressValue < 10
          ? `0:0${Math.floor(progressValue)}`
          : progressValue < 60
          ? `0:${Math.floor(progressValue)}`
          : `${Math.floor(progressValue / 60)}:${
              Math.floor(progressValue % 60) < 10
                ? `0${Math.floor(progressValue % 60)}`
                : Math.floor(progressValue % 60)
            }`}
      </p>

      <input
        type="range"
        ref={progressBarRef}
        value={progressValue}
        onChange={(e) => {
          songPlayerRef.current.play();
          setIsPlaying(true);
          songPlayerRef.current.currentTime = Math.floor(e.target.value);
        }}
        max={endTime ? endTime : '0:00'}
        className={`progress w-full h-1 bg-gray-500 rounded-full cursor-pointer mx-3 ${
          maxWidth ? maxWidth : ''
        }`}
      />

      <p className="text-gray-700">
        {endTime
          ? `${Math.floor(endTime / 60)}:${
              Math.floor(endTime % 60) < 10
                ? `0${Math.floor(endTime % 60)}`
                : Math.floor(endTime % 60)
            }`
          : '0:00'}
      </p>
    </div>
  );
};

export default MusicProgressBar;
