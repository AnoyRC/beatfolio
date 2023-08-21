import Image from 'next/image';
import Link from 'next/link';

const SongDetails = ({ id, singerImage, songName, singerName, genre }) => {
  return (
    <Link
      className="flex items-center gap-4 z-10 cursor-pointer hover:bg-gray-900/50 rounded-lg py-2 px-4"
      href={`/users/profile/${id}`}
    >
      <Image
        src={singerImage ? singerImage : '/profile/profile-image.png'}
        alt="Singer Image"
        width={58}
        height={58}
        className="rounded-full"
      />

      <div>
        <h3 className="text-xl font-semibold">
          {songName ? songName : 'Song Name'}
        </h3>

        <div className="flex">
          <h4>{singerName ? singerName : 'Singer Name'}</h4>
          <p className="text-gray-500 ml-3 flex items-center">
            <span className="w-1 h-1 mr-0.5 bg-gray-500 rounded-full"></span>
            {genre ? genre : 'Genre'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SongDetails;
