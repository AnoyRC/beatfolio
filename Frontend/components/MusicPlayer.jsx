'use client';

import PlaybackControls from './musicPlayer/PlaybackControls';
import MusicDetails from './musicPlayer/MusicDetails';
import MusicControls from './musicPlayer/MusicControls';
import { useRef, useState } from 'react';

const MusicPlayer = () => {
  return (
    <section className="flex flex-1 items-center px-6 sticky left-full bottom-0 w-full max-w-[1200px] bg-[#1c1c1c]/70 backdrop-blur z-[97] py-4">
      <PlaybackControls margin="mx-5" />
      <MusicDetails songPhoto="" songName="" singerName="" />
      <MusicControls isLiked="" endTime="" />
    </section>
  );
};

const ModalMusicPlayer = ({ isLoading, currentSong, source }) => {
  console.log(currentSong);
  const songPlayerRef = useRef(null);
  const progressBarRef = useRef(null);
  const playPauseBtnRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  songPlayerRef.onloadedmetadata = function () {
    progressBarRef.current.max = currentSong.data.duration;
    progressBarRef.current.value = 0;
  };

  const playPause = () => {
    if (songPlayerRef.current.paused) {
      songPlayerRef.current.play();
      setIsPlaying(true);
    } else {
      songPlayerRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="flex flex-1 items-center px-7 py-3 w-full max-w-[1096px] rounded-2xl backdrop-blur-sm bg-gray-900/50 mx-auto">
      <PlaybackControls
        isLoading={isLoading}
        isPlaying={isPlaying}
        handleSongControl={playPause}
        playPauseBtnRef={playPauseBtnRef}
        margin="mx-4"
      />
      {currentSong && (
        <MusicDetails
          id={currentSong.data.user.id}
          songPhoto={currentSong.data.user.profile_picture['150x150']}
          songName={currentSong.data.title.split('(')[0]}
          singerName={currentSong.data.user.name}
        />
      )}
      {source && (
        <MusicControls
          endTime={currentSong.data.duration}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          progressBarRef={progressBarRef}
          songPlayerRef={songPlayerRef}
          source={source}
        />
      )}
    </section>
  );
};

export { MusicPlayer, ModalMusicPlayer };
