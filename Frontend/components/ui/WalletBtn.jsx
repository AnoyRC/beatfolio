'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDispatch, useSelector } from 'react-redux';

import useCrossmint from '@/hooks/useCrossmint';

import { fetchUser } from '@/redux/crossmintSlice';
import { updatePublicKey, updateUser } from '@/redux/currentUserSlice';

import Avatar from '../profile/Avatar';
import { openSignupModal } from '@/redux/modalSlice';

const WalletBtn = () => {
  const dispatch = useDispatch();
  const { connected } = useWallet();

  const [publicKey, setPublicKey] = useState(
    useSelector((state) => state.currentUserSlice.publicKey)
  );

  const currentUser = dispatch(fetchUser(publicKey));

  if (currentUser) {
    dispatch(
      updateUser({
        name: currentUser.name,
        description: currentUser.description,
        image: currentUser.image,
      })
    );
  }

  const { SignMessage } = useCrossmint();

  const handleSignup = async () => {
    const signature = await SignMessage();

    dispatch(openSignupModal());

    await axios.post('http://localhost:8081/api/auth', {
      signature: signature,
      address: publicKey.toString(),
    });
  };

  useEffect(() => {
    if (publicKey) {
      dispatch(updatePublicKey(publicKey.toString()));
      setPublicKey(publicKey.toString());
    }
  }, [publicKey]);

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <>
      {connected ? (
        currentUser.id ? (
          <>
            <Avatar profilePhoto="" name="" />
          </>
        ) : (
          <>
            <button
              className="px-6 py-3 btn-gradiant rounded-lg cursor-pointer font-bold hover:scale-105 active:scale-95 transition-transform duration-150"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </>
        )
      ) : (
        <>
          <WalletMultiButtonDynamic />
        </>
      )}
    </>
  );
};
export default WalletBtn;
