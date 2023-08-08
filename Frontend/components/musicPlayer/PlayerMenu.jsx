'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

const PlayerMenu = () => {
  const [volume, setVolume] = useState(100);
  const [showVolume, setShowVolume] = useState(false);

  const onVolumeChange = (e) => {
    setVolume(e.target.value);
    console.log(volume);
  };

  const onMenuClick = () => {
    console.log('onMenuClick');
  };

  return (
    <div className="flex">
      <div className="relative">
        <Image
          src="/music-player/volume.svg"
          width={28}
          height={28}
          className="cursor-pointer mr-6"
          alt="volume button"
          onClick={() => setShowVolume((prev) => !prev)}
        />

        {showVolume && (
          <div className="absolute flex justify-center items-center -rotate-90 -left-12 bottom-24">
            <input
              value={volume}
              type="range"
              min={0}
              max={100}
              onChange={(e) => onVolumeChange(e)}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>

      <Menu
        placement="top-end"
        animate={{
          mount: { scale: 1, y: 0, x: 0 },
          unmount: { scale: 0, y: 100, x: 80 },
        }}
      >
        <MenuHandler>
          <Image
            src="/music-player/menu.svg"
            width={28}
            height={28}
            className="cursor-pointer"
            alt="menu button"
          />
        </MenuHandler>

        <MenuList className="bg-gray-900">
          <MenuItem className="flex items-center justify-between text-white hover:bg-gray-50/5 hover:text-white hover:font-bold">
            Donate{' '}
            <Image
              src="/music-player/donate.svg"
              width={20}
              height={20}
              alt=""
            />
          </MenuItem>

          <MenuItem className="flex items-center justify-between text-white hover:bg-gray-50/5 hover:text-white hover:font-bold">
            Add to Playlist{' '}
            <Image
              src="/music-player/add-playlist.svg"
              width={20}
              height={20}
              alt=""
            />
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlayerMenu;
