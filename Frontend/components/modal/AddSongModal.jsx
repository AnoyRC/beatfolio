'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, Input, Button, Textarea } from '@material-tailwind/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeUploadModal } from '@/redux/modalSlice';

import useCrossmint from '@/hooks/useCrossmint';
import { saveSongToIPFS, saveProfileToIPFS } from '@/hooks/saveToIPFS';
import { set } from 'date-fns';

export default function AddSongModal() {
  const isOpen = useSelector((state) => state.modalSlice.isUploadOpen);
  const dispatch = useDispatch();

  const [songTitle, setSongTitle] = useState('');
  const [songGenre, setSongGenre] = useState('');
  const [songMood, setSongMood] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const { publicKey } = useWallet();

  const { mintSong } = useCrossmint();

  // const { publicKey } = useWallet();
  // const currentUser = fetchUser(publicKey.toString());

  const handleModal = () => {
    dispatch(closeUploadModal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const image = await saveProfileToIPFS(e.target[0].files[0]);
      const song = await saveSongToIPFS(e.target[1].files[0]);
      const res = await mintSong(
        {
          name: songTitle,
          description: 'A song uploaded on Beatfolio',
          image: image,
          songLink: song,
          genre: songGenre,
          mood: songMood,
        },
        publicKey
      );
      setIsLoading(false);

      if (res) {
        dispatch(closeUploadModal());
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
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
              <h3 className="text-white text-2xl font-bold">Upload Song</h3>
              <p className="mt-1 font-normal text-gray-500">
                Enter your song details to upload
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
                type="file"
                size="lg"
                label="Song Profile Photo"
                required
              />
              <Input
                color="white"
                type="file"
                size="lg"
                label="Your Song"
                required
              />
              <Input
                color="white"
                size="lg"
                label="Song Title"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                required
              />
              <Input
                color="white"
                size="lg"
                label="Geners"
                value={songGenre}
                onChange={(e) => setSongGenre(e.target.value)}
                required
              />
              <Input
                color="white"
                size="lg"
                label="Moods"
                value={songMood}
                onChange={(e) => setSongMood(e.target.value)}
                required
              />
            </div>

            {isLoading ? (
              <Button className="mt-6 btn-gradiant" fullWidth type="submit">
                Loading...
              </Button>
            ) : (
              <Button className="mt-6 btn-gradiant" fullWidth type="submit">
                Upload
              </Button>
            )}
          </form>
        </Card>
      </>
    )
  );
}
