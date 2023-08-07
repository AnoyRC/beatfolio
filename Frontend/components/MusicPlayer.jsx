import PlaybackControls from './musicPlayer/PlaybackControls';
import MusicDetails from './musicPlayer/MusicDetails';
import MusicControls from './musicPlayer/MusicControls';

const MusicPlayer = () => {
  return (
    <section className="flex flex-1 items-center px-10 absolute right-0 bottom-0">
      <PlaybackControls margin="mx-5" />
      <MusicDetails songPhoto="" songName="" singerName="" />
      <MusicControls endTime="" />
    </section>
  );
};

const ModalMusicPlayer = () => {
  return (
    <section className="flex flex-1 items-center px-7 w-full max-w-[1096px] rounded-2xl backdrop-blur-sm bg-[rgba(28, 28, 28, 0.50)]">
      <PlaybackControls margin="mx-4" />
      <MusicDetails songPhoto="" songName="" singerName="" />
      <MusicControls endTime="" />
    </section>
  );
};

export { MusicPlayer, ModalMusicPlayer };
