"use client";
import Image from "next/image";
import SongDetails from "./SongDetails";
import { openMusicModal } from "@/redux/modalSlice";
import { fetchSong } from "@/redux/crossmintSlice";
import { useDispatch } from "react-redux";

const SongItem = ({ songImage, singerName, songName, genre, id }) => {
  const dispatch = useDispatch();
  return (
    <section
      className="flex gap-5 hover:bg-gray-50/5 rounded-lg cursor-pointer p-2"
      onClick={() => {
        dispatch(openMusicModal());
        dispatch(fetchSong(id));
      }}
    >
      <Image
        src={songImage ? songImage : "/song-photos/song-photo-1.png"}
        alt="Song Image"
        width={100}
        height={100}
        className="rounded-lg"
      />

      <SongDetails
        songName={songName ? songName : "Song Name"}
        singerName={singerName ? singerName.name : "Singer Name"}
        genre={genre ? genre : "Genre"}
      />
    </section>
  );
};

export default SongItem;
