import Image from 'next/image';

import PlayBtn from '../ui/PlayBtn';

const PlaybackControls = ({ margin }) => {
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

      <PlayBtn style={`border-none bg-gray-700 ${margin}`} />

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
