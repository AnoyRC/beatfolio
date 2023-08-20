import TrackItem from './TrackItem';

const TrackLists = ({ tracks }) => {
  if (!tracks || tracks.length === 0)
    return (
      <div className="mt-10 text-gray-500 w-full text-center">
        No Tracks Found
      </div>
    );

  return (
    <div className="m-2">
      {tracks &&
        tracks.map((track) => (
          <TrackItem
            key={track.id}
            id={track.id}
            trackName={track.title}
            trackImage={track.artwork['150x150']}
            singerName={track.user}
            genre={track.genre}
          />
        ))}
    </div>
  );
};

export default TrackLists;
