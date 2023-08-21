import SongItem from './SongItem';
import Link from 'next/link';

const Songs = ({ heading, url, songs }) => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-medium uppercase mb-4 text-gray-700">
          {heading}
        </h2>

        {url && (
          <Link
            className="underline text-gray-500 cursor-pointer hover:scale-105"
            href={url}
          >
            View All
          </Link>
        )}
      </div>

      <div>
        {songs &&
          songs.map((song, index) => (
            <SongItem
              key={song.id ? song.id : index}
              id={song.id}
              songName={song.title}
              singerName={song.user}
              genre={song.genre}
              songImage={song.artwork['150x150']}
            />
          ))}
      </div>
    </section>
  );
};
export default Songs;
