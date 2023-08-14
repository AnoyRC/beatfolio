'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Avatar from '../profile/Avatar';

const WalletBtn = () => {
  const [isLogin, setIsLogin] = useState(false);

  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
  );

  return (
    <>
      {isLogin ? (
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
