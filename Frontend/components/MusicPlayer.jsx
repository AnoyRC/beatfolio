import PlaybackControls from './musicPlayer/PlaybackControls';
import MusicDetails from './musicPlayer/MusicDetails';
import MusicControls from './musicPlayer/MusicControls';

const MusicPlayer = () => {
  return (
    <section className="flex flex-1 items-center px-6 sticky left-full bottom-0 w-full max-w-[1200px] bg-[#1c1c1c]/70 backdrop-blur z-[97] py-4">
      <PlaybackControls margin="mx-5" />
      <MusicDetails songPhoto="" songName="" singerName="" />
      <MusicControls isLiked="" endTime="" />
    </section>
  );
};

const ModalMusicPlayer = () => {
  return (
    <section className="flex flex-1 items-center px-7 py-3 w-full max-w-[1096px] rounded-2xl backdrop-blur-sm bg-gray-900/50 mx-auto">
      <PlaybackControls margin="mx-4" />
      <MusicDetails songPhoto="" songName="" singerName="" />
      <MusicControls endTime="" />
    </section>
  );
};

export { MusicPlayer, ModalMusicPlayer };
