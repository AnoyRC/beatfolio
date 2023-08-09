import Image from 'next/image';
import { ModalMusicPlayer } from '../MusicPlayer';

const MusicModal = ({ songName, singerName, photo }) => {
  return (
    <section className="z-40 w-full max-w-[1200px] overflow-hidden h-screen rounded-tl-3xl rounded-bl-3xl relative">
      <Image
        src="/modal/back-arrow.svg"
        width={18}
        height={18}
        alt="go back button"
        className="absolute top-8 left-8 z-10 cursor-pointer prevent-select"
      />

      <div className="w-[450px] h-[450px] mx-auto mt-16 rounded overflow-hidden relative z-10">
        <div className="flex flex-col h-full justify-between p-4">
          <div className="text-black z-20 text-base p-1.5 border-black border-y-2 font-medium w-fit">
            {singerName ? singerName : 'Singer Name'}
          </div>

          <Image
            src="/song-photos/random-1.png"
            width={320}
            height={320}
            alt="Song profile"
            className="mx-auto flex opacity-100 rounded-full h-full z-20 prevent-select"
          />

          <div className="text-black z-20 text-base p-1.5 font-medium ml-auto text-right">
            The{' '}
            <span className="block">{songName ? songName : 'Song Name'}</span>
          </div>
        </div>

        <Image
          src="/modal/music-player-bg.png"
          width={450}
          height={450}
          alt=""
          className="absolute top-0 left-0 opacity-70 prevent-select"
        />
      </div>

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-full z-10 prevent-select">
        <ModalMusicPlayer />
      </div>

      <Image
        src="/song-photos/song-photo-1.png"
        fill
        content="cover"
        alt="Song profile"
        className="absolute top-0 left-0 z-0 object-cover opacity-40 prevent-select"
      />
    </section>
  );
};

export default MusicModal;
