import Image from 'next/image';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <nav className="w-20 h-screen flex justify-between items-center flex-col py-8">
      <Image src="/logo-sm.svg" alt="logo" width={40} height={40} />

      <div className="w-full">
        <ul className="w-fit mx-auto">
          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem content="Home" href="/" src="nav/home.svg" alt="home" />
          </li>

          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem content="Feeds" href="/" src="nav/feeds.svg" alt="feeds" />
          </li>

          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem
              content="Albums"
              href="/"
              src="nav/album.svg"
              alt="albums"
            />
          </li>

          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem
              content="Artists"
              href="/"
              src="nav/artists.svg"
              alt="artists"
            />
          </li>
        </ul>

        <div className="h-0.5 bg-gray-400 mx-3 my-12"></div>

        <ul className="w-fit mx-auto">
          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem
              content="Favorites"
              href="/"
              src="common/like.svg"
              alt="favorites"
            />
          </li>

          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem
              content="Listen Later"
              href="/"
              src="nav/listen-later.svg"
              alt="listen later"
            />
          </li>

          <li className="my-3 p-2 rounded-md hover:bg-gray-50/5">
            <NavItem
              content="Playlists"
              href="/"
              src="nav/playlists.svg"
              alt="playlists"
            />
          </li>
        </ul>
      </div>

      <NavItem content="Setting" href="/" src="nav/setting.svg" alt="setting" />
    </nav>
  );
};

export default Nav;
