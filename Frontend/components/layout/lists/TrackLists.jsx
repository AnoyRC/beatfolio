import TrackItem from './TrackItem';

const TrackLists = ({ tracks }) => {
  if (!tracks) {
    tracks = [
      {
        name: 'Track Name',
        images: '/song-photos/song-photo-1.png',
        release_date: '23, June 2022',
        singerName: 'Singer Name',
        genre: 'Hiphop & Rap',
      },
      {
        name: 'Track Name',
        images: '/song-photos/song-photo-2.png',
        release_date: '05, Dec 2022',
        singerName: 'Singer Name',
        genre: 'Hiphop & Rap',
      },
      {
        name: 'Track Name',
        images: '/song-photos/song-photo-3.png',
        release_date: '23, Jan 2022',
        singerName: 'Singer Name',
        genre: 'Hiphop & Rap',
      },
      {
        name: 'Track Name',
        images: '/song-photos/song-photo-4.png',
        release_date: '29, Aug 2022',
        singerName: 'Singer Name',
        genre: 'Hiphop & Rap',
      },
    ];
  }

  return (
    <div className="m-2">
      {tracks.map((track, index) => (
        <TrackItem
          key={index}
          trackName={track.name}
          trackImage={track.images}
          trackDate={track.release_date}
          singerName={track.singerName}
          genre={track.genre}
        />
      ))}
    </div>
  );
};

export default TrackLists;
