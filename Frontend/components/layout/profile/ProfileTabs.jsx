import UnderlineTabs from '@/components/ui/UnderlineTabs';
import TrackLists from '../lists/TrackLists';
import PlaylistLists from '../lists/PlaylistLists';

const ProfileTabs = () => {
  const data = [
    {
      label: 'Songs',
      value: 'Songs',
      jsx: <TrackLists tracks={''} />,
    },
    {
      label: 'Playlists',
      value: 'Playlists',
      jsx: <PlaylistLists playlists={''} />,
    },
    {
      label: 'Favorites',
      value: 'Favorites',
      jsx: <TrackLists tracks={''} />,
    },
  ];

  return <UnderlineTabs data={data} value="Songs" />;
};
export default ProfileTabs;
