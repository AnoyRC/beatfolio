"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useDispatch } from "react-redux";
import { disconnectWallets, openUploadModal } from "@/redux/modalSlice";

import {
  Avatar as AvatarComponent,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { removeUser } from "@/redux/currentUserSlice";

const Avatar = ({ profilePhoto, name }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { disconnect } = useWallet();

  const disconnectWallet = () => {
    dispatch(removeUser());
    dispatch(disconnectWallets());
    disconnect();
  };

  return (
    <Menu
      placement="bottom-end"
      animate={{
        mount: { y: 0 },
        unmount: { y: -10 },
      }}
    >
      <MenuHandler>
        <div
          href="/"
          className="flex items-center gap-4 cursor-pointer prevent-select"
        >
          <AvatarComponent
            size="md"
            alt="avatar"
            src={profilePhoto ? profilePhoto : "/profile/avatar.svg"}
            className="border border-purple-500 shadow-xl shadow-purple-900/20 ring-4 ring-purple-500/30"
          />
          <p className="text-white font-normal text-xl">
            {name ? name : "Username"}
          </p>
        </div>
      </MenuHandler>

      <MenuList className="bg-gray-900">
        <MenuItem
          className="flex items-center text-white hover:bg-gray-50/5 hover:text-white hover:font-bold"
          onClick={() => router.push("/users/profile")}
        >
          <Image
            src={"/profile/profile-icon.svg"}
            width={20}
            height={20}
            alt=""
            className="mr-3"
          />
          Profile
        </MenuItem>

        <MenuItem
          className="flex items-center text-white hover:bg-gray-50/5 hover:text-white hover:font-bold"
          onClick={() => dispatch(openUploadModal())}
        >
          <Image
            src={"/profile/upload.svg"}
            width={20}
            height={20}
            alt=""
            className="mr-3"
          />
          Upload Song
        </MenuItem>

        <MenuItem
          className="flex items-center text-white hover:bg-gray-50/5 hover:text-white hover:font-bold"
          onClick={disconnectWallet}
        >
          <Image
            src="/profile/logout.svg"
            width={20}
            height={20}
            alt=""
            className="mr-3"
          />
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Avatar;
