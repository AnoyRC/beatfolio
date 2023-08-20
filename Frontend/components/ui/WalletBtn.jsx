'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDispatch, useSelector } from 'react-redux';

import useCrossmint from '@/hooks/useCrossmint';

import { updatePublicKey, updateUser } from '@/redux/currentUserSlice';

import Avatar from '../profile/Avatar';
import { openSignupModal } from '@/redux/modalSlice';

const WalletBtn = () => {
  const dispatch = useDispatch();
  const { connected, publicKey } = useWallet();
  const { SignMessage } = useCrossmint();
  const [currentUser, setCurrentUser] = useState();

  const getUser = async (publicKey) => {
    const { data } = await axios.get(
      `http://localhost:8081/api/crossmint/fetch/user/${publicKey}`
    );
    // console.log(data);
    setCurrentUser(data);
    // console.log(currentUser);
  };

  const handleSignup = async () => {
    getUser(publicKey);
    const signature = await SignMessage();

    if (!currentUser) {
      dispatch(openSignupModal());
    } else {
      // console.log('user already exists');
    }

    await axios.post('http://localhost:8081/api/auth', {
      signature: signature,
      address: publicKey.toString(),
    });
  };

  useEffect(() => {
    if (publicKey) {
      dispatch(updatePublicKey(publicKey.toString()));
    }

    if (currentUser) {
      dispatch(
        updateUser({
          name: currentUser.metadata.name,
          description: currentUser.metadata.description,
          image: currentUser.metadata.image,
        })
      );
    }

    // console.log(currentUser);
  }, [publicKey, currentUser]);

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <>
      {connected ? (
        <>
          <button
            className="px-6 py-3 btn-gradiant rounded-lg cursor-pointer font-bold hover:scale-105 active:scale-95 transition-transform duration-150"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </>
      ) : (
        <>
          <WalletMultiButtonDynamic />
        </>
      )}
    </>
  );
};
export default WalletBtn;
