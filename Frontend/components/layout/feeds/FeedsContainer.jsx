'use client';

import Feed from './Feed';

const FeedsContainer = ({ songs }) => {
  return (
    <section className="grid grid-cols-8">
      {songs.map((song, index) => (
        <Feed
          key={song.id}
          id={song.id}
          songName={song.title}
          songMood={song.mood}
          songImage={
            index % 3 === 0
              ? song.artwork['1000x1000']
              : song.artwork['480x480']
          }
          isLiked={song.isLiked}
          genre={song.genre}
          singer={song.user}
          number={index}
        />
      ))}
    </section>
  );
};

export default FeedsContainer;
