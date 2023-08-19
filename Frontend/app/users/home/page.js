import Feed from '@/components/layout/feeds/Feed';
import PlaylistContainer from '@/components/layout/lists/PlaylistContainer';
import UnderlineTabs from '@/components/ui/UnderlineTabs';
import PlaylistLists from '@/components/layout/lists/PlaylistLists';
import TrackLists from '@/components/layout/lists/TrackLists';

export default function Page() {
  const data = [
    {
      label: 'Playlists',
      value: 'playlists',
      jsx: <PlaylistLists playlists={''} />,
    },
    {
      label: 'Tracks',
      value: 'tracks',
      jsx: <TrackLists tracks={''} />,
    },
  ];

  return (
    <section className="mx-2">
      <Feed
        isLiked={true}
        songImage="/song-photos/song-photo-6.png"
        number={0}
      />

      <PlaylistContainer />
      <UnderlineTabs data={data} value="playlists" />
    </section>
  );
}
