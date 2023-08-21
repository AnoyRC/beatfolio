"use client";

import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { useDispatch } from "react-redux";

import { removeUser } from "@/redux/currentUserSlice";

import { Tooltip } from "@material-tailwind/react";
import { disconnectWallets } from "@/redux/modalSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const { disconnect, connected } = useWallet();

  const disconnectWallet = () => {
    dispatch(removeUser());
    dispatch(disconnectWallets());
    disconnect();
  };

  return (
    <button
      onClick={() => disconnectWallet()}
      className="w-6 h-6 disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={connected ? false : true}
    >
      <Tooltip
        content={"Log Out"}
        placement="right"
        animate={{
          mount: { scale: 1, x: 10 },
          unmount: { scale: 0, x: -32 },
        }}
        className="border border-gray-300 px-4 py-2 font-bold text-white bg-gray-900 relative z-50"
      >
        <Image
          src="/profile/logout.svg"
          alt="logout btn"
          width={24}
          height={24}
        />
      </Tooltip>
    </button>
  );
};

export default Logout;
