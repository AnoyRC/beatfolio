'use client';

import { useState } from 'react';

import Avatar from '../profile/Avatar';

const WalletBtn = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Avatar profilePhoto="" name="" />
      ) : (
        <button className="px-6 py-3 btn-gradiant rounded-lg cursor-pointer font-bold hover:scale-105 active:scale-95 transition-transform duration-150">
          Connect Wallet
        </button>
      )}
    </>
  );
};
export default WalletBtn;
