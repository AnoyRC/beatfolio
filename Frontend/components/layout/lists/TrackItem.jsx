import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { fetchSong } from '@/redux/crossmintSlice';
import { openMusicModal } from '@/redux/modalSlice';

const TrackItem = ({ trackImage, genre, singerName, trackName, id }) => {
  const dispatch = useDispatch();

  const handleSongClick = () => {
    dispatch(fetchSong(id));
    dispatch(openMusicModal());
  };

  return (
    <section
      className="flex justify-between items-center hover:bg hover:bg-gray-50/5 rounded-lg mb-2 cursor-pointer p-2"
      onClick={handleSongClick}
    >
      <div className="flex gap-5 items-center h-20 w-3/4">
        <Image
          src={trackImage}
          alt={trackName}
          width={80}
          height={80}
          className="h-20 w-20 rounded-md"
        />

        <div>
          <h4 className="font-medium text-xl text-white">{trackName}</h4>
          <h5 className="text-gray-500">{singerName.name}</h5>
        </div>
      </div>

      <p className="text-gray-500">{genre}</p>

      <Image src="/visit-arrow.svg" alt="Play" width={28} height={28} />
    </section>
  );
};

export default TrackItem;
