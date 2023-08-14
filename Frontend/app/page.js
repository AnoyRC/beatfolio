import Image from 'next/image';

import HomeNav from '@/components/navigation/HomeNav';
import Header from '@/components/layout/home/Header';

import VhLines from '@/public/home/vh-lines.svg';
import music from '@/public/home/music.svg';

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar max-w-7xl relative mx-auto">
      <HomeNav />

      <Header />

      <Image
        src={VhLines}
        alt=""
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1280px] h-screen -z-10"
      />

      <Image
        src={music}
        alt=""
        className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[1280px] -z-10"
      />
    </main>
  );
}
