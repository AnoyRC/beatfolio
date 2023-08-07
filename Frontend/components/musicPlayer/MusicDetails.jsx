import Image from 'next/image';

const MusicDetails = ({ songPhoto, songName, singerName }) => {
  return (
    <div className="flex mr-10">
      <div className="rounded-lg overflow-hidden">
        {songPhoto ? (
          <Image src={songPhoto} alt="songPhoto" width={58} height={58} />
        ) : (
          <div className="w-14 h-14 bg-white"></div>
        )}
      </div>

      <div className="ml-4">
        <p className="text-xl font-semibold">
          {songName ? songName : 'Song Name'}
        </p>
        <p className="text-gray-600">
          {singerName ? singerName : 'Singer Name'}
        </p>
      </div>
    </div>
  );
};

export default MusicDetails;
