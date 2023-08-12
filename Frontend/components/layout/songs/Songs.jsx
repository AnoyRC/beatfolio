import SongItem from './SongItem';

const Songs = ({ heading, url, songs }) => {
  if (!songs) {
    songs = [
      {
        songName: 'Song Name',
        singerName: 'Singer Name',
        genre: 'Genre',
        songImage: '/song-photos/song-photo-1.png',
      },
      {
        songName: 'Song Name',
        singerName: 'Singer Name',
        genre: 'Genre',
        songImage: '/song-photos/song-photo-2.png',
      },
      {
        songName: 'Song Name',
        singerName: 'Singer Name',
        genre: 'Genre',
        songImage: '/song-photos/song-photo-3.png',
      },
    ];
  }

  return (
    <section className="mb-16">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-medium uppercase mb-4 text-gray-700">
          {heading}
        </h2>

        <span className="underline text-gray-500 cursor-pointer hover:scale-105">
          View All
        </span>
      </div>

      <div>
        {songs.map((song, index) => (
          <SongItem
            key={song.id ? song.id : index}
            songName={song.songName}
            singerName={song.singerName}
            genre={song.genre}
            songImage={song.songImage}
          />
        ))}
      </div>
    </section>
  );
};
export default Songs;
