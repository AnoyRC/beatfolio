'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';
import { useDispatch } from 'react-redux';

import { updatePublicKey } from '@/redux/currentUserSlice';

import Avatar from '../profile/Avatar';
import { openSignupModal } from '@/redux/modalSlice';

const WalletBtn = () => {
  const dispatch = useDispatch();
  const { connected, publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      dispatch(updatePublicKey(publicKey.toString()));
      dispatch(openSignupModal());
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
        <Avatar profilePhoto="" name="" />
      ) : (
        <>
          <WalletMultiButtonDynamic />
        </>
      )}
    </>
  );
};
export default WalletBtn;
