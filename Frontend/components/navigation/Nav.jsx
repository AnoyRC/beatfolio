import Image from 'next/image';
import NavItem from './NavItem';
import NavItems from './NavItems';

const Nav = () => {
  return (
    <nav className="w-20 h-screen flex justify-between items-center flex-col py-8">
      <Image
        src="/logo-sm.svg"
        alt="Beatfolio logo"
        width={40}
        height={40}
        className="prevent-select"
      />

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
