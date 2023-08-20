'use client';

import ArtistItem from './ArtistItem';

const Artists = ({ artists }) => {
  console.log(artists);
  return (
    <section className="grid grid-cols-4 gap-16">
      {artists.map((artist) => (
        <ArtistItem key={artist} id={artist} />
      ))}
    </section>
  );
};
export default Artists;
