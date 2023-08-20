import TrackItem from './TrackItem';

const TrackLists = ({ tracks }) => {
  return (
    <div className="m-2">
      {tracks.map((track) => (
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
