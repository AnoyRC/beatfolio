'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';

import Avatar from '../profile/Avatar';

const WalletBtn = () => {
  const { connected } = useWallet();

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
