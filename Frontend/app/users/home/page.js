import Feed from '@/components/layout/feeds/Feed';
import PlaylistContainer from '@/components/layout/lists/PlaylistContainer';
import UnderlineTabs from '@/components/ui/UnderlineTabs';

export default function Page() {
  return (
    <section className="mx-2 mb-32">
      <Feed
        isLiked={true}
        songImage="/song-photos/song-photo-6.png"
        number={0}
      />

      <PlaylistContainer />
      <UnderlineTabs />
    </section>
  );
}
