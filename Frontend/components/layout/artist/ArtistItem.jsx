import Image from 'next/image';

const ArtistItem = ({ artist }) => {
  return (
    <section className="space-y-5 cursor-pointer p-2 hover:bg-gray-50/5 rounded-lg col-span-1">
      <Image
        src="/placeholder.png"
        alt={artist.name}
        width={250}
        height={250}
        className="rounded-full"
      />

      <h3 className="text-center text-2xl ">{artist.name}</h3>
    </section>
  );
};

export default ArtistItem;
