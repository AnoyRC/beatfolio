import Image from 'next/image';

const PlaylistItem = ({
  playlistName,
  playlistImage,
  playlistDate,
  playlistTracks,
}) => {
  return (
    <section className="flex justify-between items-center hover:bg hover:bg-gray-50/5 rounded-lg mb-2 cursor-pointer p-2">
      <div className="flex gap-5 items-center h-20">
        <Image
          src={playlistImage}
          alt={playlistName}
          width={80}
          height={80}
          className="h-20 w-20 rounded-md"
        />

        <h4 className="font-medium text-xl text-white">{playlistName}</h4>
      </div>

      <p className="text-gray-500">{playlistTracks + ' Tracks'}</p>
      <p className="text-gray-500">{playlistDate}</p>

      <Image src="/visit-arrow.svg" alt="Play" width={28} height={28} />
    </section>
  );
};

export default PlaylistItem;
