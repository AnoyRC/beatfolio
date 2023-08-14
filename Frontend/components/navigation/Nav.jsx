import Image from 'next/image';
import NavItem from './NavItem';
import NavItems from './NavItems';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-20 h-screen flex justify-between items-center flex-col py-8">
      <Link href="/">
        <Image
          src="/logo-sm.svg"
          alt="Beatfolio logo"
          width={40}
          height={40}
          className="prevent-select"
        />
      </Link>

      <NavItems />

      <NavItem
        content="Setting"
        href="/users/setting"
        src="/nav/setting.svg"
        alt="setting"
      />
    </nav>
  );
};

export default Nav;
