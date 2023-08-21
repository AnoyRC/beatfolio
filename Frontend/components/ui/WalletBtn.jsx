'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDispatch, useSelector } from 'react-redux';

import useCrossmint from '@/hooks/useCrossmint';

import { updatePublicKey, updateUser } from '@/redux/currentUserSlice';

import Avatar from '../profile/Avatar';
import { connectWallet, openSignupModal } from '@/redux/modalSlice';
import { fetchUser } from '@/redux/crossmintSlice';
import SignUp from '../layout/home/SignUp';

const WalletBtn = () => {
  const dispatch = useDispatch();
  const { connected, publicKey } = useWallet();
  const { SignMessage } = useCrossmint();
  const currentUser = useSelector((state) => state.crossmint.currentUser);
  const isConnected = useSelector((state) => state.modalSlice.isConnected);

  useEffect(() => {
    if (!publicKey) return;
    dispatch(fetchUser(publicKey));
    if (isConnected) return;
    handleAuth();
    dispatch(connectWallet());
  }, [connected]);

  const handleAuth = async () => {
    const signature = await SignMessage();
    try {
      const res = await axios.post(
        'https://beatfolio.dotcombackend.me/api/auth',
        {
          address: publicKey,
          signature,
        }
      );

      if (res) {
        localStorage.setItem('token', res.data.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <>
      {connected ? (
        currentUser ? (
          <Avatar
            profilePhoto={currentUser.metadata.image}
            name={currentUser.metadata.name}
          />
        ) : (
          <button
            className="px-6 py-3 btn-gradiant rounded-lg cursor-pointer font-bold hover:scale-105 active:scale-95 transition-transform duration-150"
            onClick={() => dispatch(openSignupModal())}
          >
            Sign Up
          </button>
        )
      ) : (
        <WalletMultiButtonDynamic />
      )}
    </>
  );
};
export default WalletBtn;
