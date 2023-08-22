import Image from 'next/image';

import PlayBtn from '../ui/PlayBtn';

const PlaybackControls = ({
  isLoading,
  isPlaying,
  handleSongControl,
  playPauseBtnRef,
  margin,
}) => {
  return (
    <div className="flex items-center mr-10">
      {isLoading ? (
        <div className="animate-pulse flex items-center justify-center h-12 w-12 rounded-full bg-gray-700">
          <Image
            src="/load.svg"
            width={20}
            height={20}
            alt=""
            className="animate-spin"
          />
        </div>
      ) : (
        <PlayBtn
          isPlaying={isPlaying}
          handleSongControl={handleSongControl}
          style={`border-none bg-gray-700 ${margin}`}
          playPauseBtnRef={playPauseBtnRef}
        />
      )}
    </div>
  );
};

export default PlaybackControls;
