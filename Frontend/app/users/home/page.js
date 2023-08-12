import Feed from '@/components/layout/feeds/Feed';

export default function Page() {
  return (
    <section>
      <Feed
        isLiked={true}
        songImage="/song-photos/song-photo-6.png"
        number={0}
      />
    </section>
  );
}
