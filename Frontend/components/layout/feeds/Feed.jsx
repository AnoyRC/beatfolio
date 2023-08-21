"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import PlayBtn from "../../ui/PlayBtn";
import FeedDetails from "./FeedDetails";
import Like from "../../ui/Like";
import PlayerMenu from "../../musicPlayer/PlayerMenu";
import { openMusicModal } from "@/redux/modalSlice";
import { fetchSong } from "@/redux/crossmintSlice";
import { useDispatch } from "react-redux";

const Feed = ({
  id,
  songName,
  songMood,
  songImage,
  isLiked,
  genre,
  singer,
  number,
}) => {
  const dispatch = useDispatch();
  const handleSongControl = () => {
    dispatch(openMusicModal());
    dispatch(fetchSong(id));
  };

  return (
    <div
      className={`h-[50vh] w-full relative ${
        number % 3 == 0 ? "col-span-8" : "col-span-4"
      }`}
    >
      <Image
        src={songImage ? songImage : "/song-photos/song-photo-1.png"}
        fill
        objectFit="cover"
        alt="Song Profle"
        className="opacity-70"
      />
      <div className="flex justify-between items-center px-6 py-9">
        <FeedDetails
          id={singer.id}
          singerImage={singer.profile_picture["150x150"]}
          songName={songName}
          singerName={singer.name}
          genre={`${genre} / ${songMood}`}
        />

        <div className="flex z-10 mr-3">
          <Like liked={isLiked} />
          <PlayerMenu
            placement="bottom-end"
            animate={{
              mount: { scale: 1, y: 0, x: 0 },
              unmount: { scale: 0, y: -20, x: 80 },
            }}
          />
        </div>
      </div>

      <button
        className={`p-3 border rounded-full bg-white/20 border-white absolute top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2 hover:opacity-80`}
        onClick={handleSongControl}
      >
        <Image
          src="/music-player/play.svg"
          width={28}
          height={28}
          alt="play button"
        />
      </button>
    </div>
  );
};

export default Feed;
