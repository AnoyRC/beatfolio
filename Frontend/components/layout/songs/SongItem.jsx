import Image from 'next/image';
import SongDetails from './SongDetails';

const SongItem = ({ songImage, singerName, songName, genre }) => {
  return (
    <section className="flex gap-5 hover:bg-gray-50/5 rounded-lg cursor-pointer p-2">
      <Image
        src={songImage ? songImage : '/song-photos/song-photo-1.png'}
        alt="Song Image"
        width={100}
        height={100}
        className="rounded-lg"
      />

      <SongDetails
        songName={songName ? songName : 'Song Name'}
        singerName={singerName ? singerName : 'Singer Name'}
        genre={genre ? genre : 'Genre'}
      />
    </section>
  );
};

export default SongItem;
