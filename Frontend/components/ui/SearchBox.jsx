'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const SearchBox = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="relative flex items-center w-2/3 max-w-md">
      <Image
        src="/search.svg"
        width={28}
        height={28}
        alt=""
        className="absolute left-6 cursor-pointer"
        onClick={handleIconClick}
      />

      <input
        ref={inputRef}
        label="Search"
        className="outline-none bg-gray-800 rounded-full px-6 py-3 pl-16 text-xl text-white w-full"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
