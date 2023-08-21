'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Tooltip } from '@material-tailwind/react';

const NavItem = ({ content, href, src, alt }) => {
  return (
    <Link href={href} className="relative z-[110] prevent-select">
      <Tooltip
        content={content}
        placement="right"
        animate={{
          mount: { scale: 1, x: 10 },
          unmount: { scale: 0, x: -32 },
        }}
        className="border border-gray-300 px-4 py-2 font-bold text-white bg-gray-900 relative z-[110]"
      >
        <Image src={src} alt={alt} width={24} height={24} />
      </Tooltip>
    </Link>
  );
};

export default NavItem;
