import Feed from './Feed';

const FeedsContainer = ({ songs }) => {
  if (!songs) {
    songs = [
      {
        songImage: '/song-photos/song-photo-1.png',
        isLiked: true,
      },
      {
        songImage: '/song-photos/song-photo-2.png',
        isLiked: false,
      },
      {
        songImage: '/song-photos/song-photo-3.png',
        isLiked: true,
      },
      {
        songImage: '/song-photos/song-photo-4.png',
        isLiked: false,
      },
      {
        songImage: '/song-photos/song-photo-5.png',
        isLiked: true,
      },
      {
        songImage: '/song-photos/song-photo-6.png',
        isLiked: false,
      },
    ];
  }

  return (
    <section className="grid grid-cols-8">
      {songs.map((song, index) => (
        <Feed
          key={song.id ? song.id : index}
          isLiked={song.isLiked}
          songImage={song.songImage}
          number={index}
        />
      ))}
    </section>
  );
};
export default FeedsContainer;
