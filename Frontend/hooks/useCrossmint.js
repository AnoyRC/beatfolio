import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import bs58 from "bs58";

export default function useCrossmint() {
  const { signMessage } = useWallet();

  const mintUser = async (user, publicKey) => {
    const body = {
      name: user.name,
      description: user.description,
      image: `https://${user.image}.ipfs.w3s.link`,
      address: publicKey,
    };

    const res = await axios
      .post(`https://beatfolio.dotcombackend.me/api/crossmint/mint/user`, body)
      .catch((err) => {
        console.log(err);
        return null;
      });

    return res;
  };

  const mintSong = async (song, publicKey) => {
    const body = {
      name: song.name,
      description: song.description,
      image: `https://${song.image}.ipfs.w3s.link`,
      songLink: `https://${song.songLink}.ipfs.w3s.link`,
      genre: song.genre,
      mood: song.mood,
      address: publicKey,
    };

    const res = await axios
      .post(`https://beatfolio.dotcombackend.me/api/crossmint/mint/song`, body)
      .catch((err) => {
        console.log(err);
        return null;
      });

    return res;
  };

  const fetchUser = async (publicKey) => {
    await axios
      .get(
        `https://beatfolio.dotcombackend.me/api/crossmint/fetch/user/${publicKey}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const fetchSong = async (id) => {
    await axios
      .get(`https://beatfolio.dotcombackend.me/api/crossmint/fetch/song/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const SignMessage = async () => {
    const signedMessage = await signMessage(
      new TextEncoder().encode(
        "Welcome to BeatFolio. Please Sign the message to continue."
      )
    );

    return bs58.encode(signedMessage);
  };

  return { mintUser, mintSong, fetchUser, fetchSong, SignMessage };
}
