'use client';

import Image from 'next/image';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

const PlayerMenu = ({ placement, animate }) => {
  return (
    <Menu placement={placement} animate={animate}>
      <MenuHandler>
        <Image
          src="/music-player/menu.svg"
          width={28}
          height={28}
          className="cursor-pointer ml-6 hover:scale-110 hover:opacity-80 active:scale-95"
          alt="menu button"
        />
      </MenuHandler>

      <MenuList className="bg-gray-900">
        <MenuItem className="flex items-center justify-between text-white hover:bg-gray-50/5 hover:text-white hover:font-bold">
          Donate
          <Image src="/music-player/donate.svg" width={20} height={20} alt="" />
        </MenuItem>

        <MenuItem className="flex items-center justify-between text-white hover:bg-gray-50/5 hover:text-white hover:font-bold">
          Listen Later
          <Image src="/nav/listen-later.svg" width={20} height={20} alt="" />
        </MenuItem>

        <MenuItem className="flex items-center justify-between text-white hover:bg-gray-50/5 hover:text-white hover:font-bold">
          Add to Playlist
          <Image
            src="/music-player/add-playlist.svg"
            width={20}
            height={20}
            alt=""
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlayerMenu;
