import NavItem from './NavItem';

const NavItems = () => {
  return (
    <div className="w-full">
      <ul className="w-fit mx-auto">
        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Home"
            href="/users/home"
            src="/nav/home.svg"
            alt="home"
          />
        </li>

        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Feeds"
            href="/feeds"
            src="/nav/feeds.svg"
            alt="feeds"
          />
        </li>

        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Albums"
            href="/albums"
            src="/nav/album.svg"
            alt="albums"
          />
        </li>

        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Artists"
            href="/artists"
            src="/nav/artists.svg"
            alt="artists"
          />
        </li>
      </ul>

      <div className="h-0.5 bg-gray-400 mx-3 my-12"></div>

      <ul className="w-fit mx-auto">
        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Favorites"
            href="/users/favorites"
            src="/common/like.svg"
            alt="favorites"
          />
        </li>

        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Listen Later"
            href="/users/listen-later"
            src="/nav/listen-later.svg"
            alt="listen later"
          />
        </li>

        <li className="my-3 p-1.5 rounded-md hover:bg-gray-50/5">
          <NavItem
            content="Playlists"
            href="/users/playlists"
            src="/nav/playlists.svg"
            alt="playlists"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
