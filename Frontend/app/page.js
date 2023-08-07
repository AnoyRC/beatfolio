import { MusicPlayer, ModalMusicPlayer } from '@/components/MusicPlayer';
import Nav from '@/components/navigation/Nav';

export default function Home() {
  return (
    <main className="h-screen flex max-w-7xl relative">
      <Nav />
      <MusicPlayer />
      {/* <ModalMusicPlayer /> */}
    </main>
  );
}
