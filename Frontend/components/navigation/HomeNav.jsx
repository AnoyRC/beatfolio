import Image from 'next/image';
import Link from 'next/link';

import WalletBtn from '../ui/WalletBtn';

import logo from '@/public/logo-lg.svg';

const HomeNav = () => {
  return (
    <nav className="sticky top-0 px-10 bg-[#1c1c1c]/20 backdrop-blur flex justify-between h-20 items-center w-full z-10">
      <Image src={logo} alt="logo" />

      <ul className="flex items-center gap-x-14">
        <li className="hover:scale-105 active:scale-95 cursor-pointer p-2">
          <Link href="/users/home">Home</Link>
        </li>

        <li>
          <WalletBtn />
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
