'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useAudius from '@/hooks/useAudius';
import { ModalMusicPlayer } from '../MusicPlayer';
import { closeMusicModal, openMusicModal } from '@/redux/modalSlice';
import { fetchSong } from '@/redux/crossmintSlice';

const MusicModal = () => {
  const [songUrl, setSongUrl] = useState(null);
  const [songId, setSongId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modalSlice.isMusicModalOpen);
  const currentSong = useSelector((state) => state.crossmint.currentSong);

  useEffect(() => {
    setIsLoading(true);
    setSongId(currentSong?.data.id);
    if (songId)
      fetch(
        `https://blockchange-audius-discovery-03.bdnodes.net/v1/tracks/${songId}/stream?app_name=EXAMPLEAPP`
      ).then((res) => {
        setSongUrl(res.url);
        setIsLoading(false);
      });
  }, [songId, currentSong]);

  return (
    isOpen && (
      <section className="z-[100] w-full max-w-[1200px] overflow-hidden h-screen rounded-tl-3xl rounded-bl-3xl bg-[#1c1c1c] absolute right-0">
        <Image
          src="/modal/back-arrow.svg"
          width={18}
          height={18}
          alt="go back button"
          className="absolute top-8 left-8 z-10 cursor-pointer prevent-select"
          onClick={() => dispatch(closeMusicModal())}
        />

        <div className="w-[450px] h-[450px] mx-auto mt-16 rounded overflow-hidden relative z-10">
          <div className="flex flex-col h-full justify-between p-4">
            <div className="text-black z-20 text-base p-1.5 border-black border-y-2 font-medium w-fit">
              {currentSong ? currentSong.data.user.name : 'Singer Name'}
            </div>

            <Image
              src={currentSong ? currentSong.data.artwork['480x480'] : ''}
              width={320}
              height={320}
              alt="Song profile"
              className="mx-auto flex opacity-100 rounded-full h-full z-20 prevent-select bg-white"
            />

            <div className="text-black z-20 text-base p-1.5 font-medium ml-auto text-right">
              The{' '}
              <span className="block">
                {currentSong ? currentSong.data.title : 'Track Name'}
              </span>
            </div>
          </div>

          <Image
            src="/modal/music-player-bg.png"
            width={450}
            height={450}
            alt=""
            className="absolute top-0 left-0 opacity-70 prevent-select"
          />
        </div>

        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-full z-10 prevent-select">
          <ModalMusicPlayer
            isLoading={isLoading}
            currentSong={currentSong}
            source={songUrl}
          />
        </div>

        <Image
          src={currentSong ? currentSong.data.artwork['1000x1000'] : ''}
          fill
          content="cover"
          alt="Song profile"
          className="absolute top-0 left-0 z-0 object-cover opacity-40 prevent-select"
        />
      </section>
    )
  );
};

export default MusicModal;
