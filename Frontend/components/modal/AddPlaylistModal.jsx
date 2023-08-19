'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Card, Input, Button, Textarea } from '@material-tailwind/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddPlaylistModal } from '@/redux/modalSlice';

import useCrossmint from '@/hooks/useCrossmint';
import { saveSongToIPFS, saveProfileToIPFS } from '@/hooks/saveToIPFS';

export default function AddPlaylistModal() {
  const isOpen = useSelector((state) => state.modalSlice.isAddPlaylistOpen);
  const dispatch = useDispatch();
  const { publicKey } = useSelector(
    (state) => state.currentUserSlice.publicKey
  );

  const [playlistTitle, setplaylistTitle] = useState('');

  const { fetchUser } = useCrossmint();
  // const currentUser = fetchUser(publicKey.toString());

  const handleModal = () => {
    dispatch(closeAddPlaylistModal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:8081/api/playlist/create', {
      name: playlistTitle,
      address: publicKey,
    });
  };

  return (
    isOpen && (
      <>
        <div
          className="h-screen w-screen absolute top-0 left-0 z-[98] backdrop-blur-lg"
          onClick={handleModal}
        ></div>

        <Card
          color="gray"
          shadow={true}
          className={`p-5 w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99]`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-2xl font-bold">
                Create New Playlist
              </h3>
              <p className="mt-1 font-normal text-gray-500">
                Enter your playlist details
              </p>
            </div>

            <button onClick={handleModal}>
              <Image src="/profile/close.svg" width={28} height={28} alt="" />
            </button>
          </div>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6 text-white">
              <Input
                color="white"
                size="lg"
                label="Playlist Title"
                value={playlistTitle}
                onChange={(e) => setplaylistTitle(e.target.value)}
                required
              />
            </div>

            <Button className="mt-6 btn-gradiant" fullWidth type="submit">
              Create
            </Button>
          </form>
        </Card>
      </>
    )
  );
}
