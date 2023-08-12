import Image from 'next/image';

import PlayBtn from '../../ui/PlayBtn';
import FeedDetails from './FeedDetails';
import Like from '../../ui/Like';
import PlayerMenu from '../../musicPlayer/PlayerMenu';

const Feed = ({
  songImage,
  isLiked,
  genre,
  singerImage,
  songName,
  singer,
  number,
}) => {
  return (
    <div
      className={`h-[50vh] w-full relative ${
        number % 3 == 0 ? 'col-span-8' : 'col-span-4'
      }`}
    >
      <Image
        src={songImage ? songImage : '/song-photos/song-photo-1.png'}
        fill
        objectFit="cover"
        alt="Song Profle"
        className="opacity-70"
      />

      <div className="flex justify-between items-center px-6 py-9">
        <FeedDetails
          singerImage={singerImage}
          songName={songName}
          singerName={singer}
          genre={genre}
        />

        <div className="flex z-10 mr-3">
          <Like liked={isLiked} />
          <PlayerMenu
            placement="bottom-end"
            animate={{
              mount: { scale: 1, y: 0, x: 0 },
              unmount: { scale: 0, y: -20, x: 80 },
            }}
          />
        </div>
      </div>

      <PlayBtn style="bg-white/20 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-80" />
    </div>
  );
};

export default Feed;
