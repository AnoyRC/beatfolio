import Image from "next/image";

import PlayBtn from "../ui/PlayBtn";

const PlaybackControls = ({
  isPlaying,
  handleSongControl,
  playPauseBtnRef,
  margin,
}) => {
  return (
    <div className="flex items-center mr-10">
      <PlayBtn
        isPlaying={isPlaying}
        handleSongControl={handleSongControl}
        style={`border-none bg-gray-700 ${margin}`}
        playPauseBtnRef={playPauseBtnRef}
      />
    </div>
  );
};

export default PlaybackControls;
