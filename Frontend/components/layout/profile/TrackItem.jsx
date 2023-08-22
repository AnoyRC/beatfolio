import Image from 'next/image';

const TrackItem = ({ trackImage, genre, name, trackName, id }) => {
  return (
    <section className="flex justify-start items-center hover:bg hover:bg-gray-50/5 rounded-lg mb-2 cursor-pointer p-2">
      <div className="flex gap-5 items-center h-20 w-3/4">
        <Image
          src={trackImage}
          alt={trackName}
          width={80}
          height={80}
          className="h-20 w-20 rounded-md"
        />

        <div>
          <h4 className="font-medium text-xl text-white">{trackName}</h4>
          <h5 className="text-gray-500">{name}</h5>
        </div>
      </div>

      <p className="text-gray-500">{genre}</p>
    </section>
  );
};

export default TrackItem;
