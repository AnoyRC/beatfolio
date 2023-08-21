'use client';

import { useSelector } from 'react-redux';

import TrackItem from './TrackItem';

const TrackLists = ({ tracks, name }) => {
  if (!tracks || tracks.length === 0)
    return (
      <div className="mt-10 text-gray-500 w-full text-center">
        No Tracks Found
      </div>
    );

  const currentUser = useSelector((state) => state.crossmint.currentUser);

  return (
    currentUser && (
      <div className="m-2">
        {tracks &&
          tracks.map((track) => (
            <TrackItem
              key={track.id}
              id={track.metadata.attributes[0].value}
              trackName={track.metadata.name}
              trackImage={track.metadata.image}
              singerName={name}
              genre={track.metadata.attributes[1].value}
            />
          ))}
      </div>
    )
  );
};

export default TrackLists;
