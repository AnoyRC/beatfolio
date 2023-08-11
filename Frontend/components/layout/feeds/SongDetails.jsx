'use client';

import { Avatar } from '@material-tailwind/react';

const SongDetails = ({ singerImage, songName, singerName, genre }) => {
  return (
    <div className="flex items-center gap-4 z-10 cursor-pointer">
      <Avatar
        size="lg"
        src={singerImage ? singerImage : '/profile/profile-image.png'}
        alt="Singer"
      />

      <div>
        <h3 className="text-xl font-semibold">
          {songName ? songName : 'Song Name'}
        </h3>

        <p className="flex">
          {singerName ? singerName : 'Singer Name'}
          <span className="text-gray-700 ml-3 flex items-center">
            <span className="w-1 h-1 mr-0.5 bg-gray-700 rounded-full"></span>
            {genre ? genre : 'Genre'}
          </span>
        </p>
      </div>
    </div>
  );
};
export default SongDetails;
