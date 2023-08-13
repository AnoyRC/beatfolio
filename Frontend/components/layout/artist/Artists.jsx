import ArtistItem from './ArtistItem';

const Artists = () => {
  const a = [
    {
      id: 1,
      name: 'Artist 1',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 2,
      name: 'Artist 2',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 3,
      name: 'Artist 3',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 4,
      name: 'Artist 4',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 5,
      name: 'Artist 5',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 6,
      name: 'Artist 6',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 7,
      name: 'Artist 7',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 8,
      name: 'Artist 8',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 9,
      name: 'Artist 9',
      image: 'https://via.placeholder.com/250',
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-16">
      {a.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))}
    </section>
  );
};
export default Artists;
