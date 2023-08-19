import PlaylistLists from '@/components/layout/lists/PlaylistLists';
import AddPlaylist from '@/components/ui/AddPlaylist';

export default function Page() {
  return (
    <section className="relative">
      <PlaylistLists playlists={''} />
      <PlaylistLists playlists={''} />
      <PlaylistLists playlists={''} />

      <AddPlaylist />
    </section>
  );
}
