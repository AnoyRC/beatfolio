import { MusicPlayer, ModalMusicPlayer } from '@/components/MusicPlayer';
import MusicModal from '@/components/modal/MusicModal';
import Nav from '@/components/navigation/Nav';

export default function Home() {
  return (
    <main className="h-screen flex max-w-7xl relative mx-auto">
      <Nav />

      <section className="w-full">
        {/* <MusicPlayer /> */}
        {/* <ModalMusicPlayer /> */}
        <MusicModal />
      </section>
    </main>
  )
}
