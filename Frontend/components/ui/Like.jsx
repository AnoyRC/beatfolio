'use client';

import Image from 'next/image';
import { useState } from 'react';

const Like = ({ liked }) => {
  const [isLiked, setIsLiked] = useState(liked ? liked : false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      {isLiked ? (
        <Image
          src="/common/red-like.svg"
          className="cursor-pointer hover:scale-110 active:scale-95"
          width={28}
          height={28}
          onClick={toggleLike}
          alt="like button"
        />
      ) : (
        <Image
          src="/common/like.svg"
          className="cursor-pointer hover:scale-110 active:scale-95"
          width={28}
          height={28}
          onClick={toggleLike}
          alt="like button"
        />
      )}
    </>
  );
};
export default Like;
