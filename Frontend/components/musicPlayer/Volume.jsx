import { useState } from 'react';
import Image from 'next/image';

const Volume = () => {
  const [volume, setVolume] = useState(100);
  const [showVolume, setShowVolume] = useState(false);

  const onVolumeChange = (e) => {
    setVolume(e.target.value);
    console.log(volume);
  };

  return (
    <>
      {showVolume && (
        <div
          className="h-screen w-screen fixed -bottom-12 left-0"
          onClick={() => setShowVolume((prev) => !prev)}
        ></div>
      )}

      <div className="relative">
        <Image
          src="/music-player/volume.svg"
          width={28}
          height={28}
          className="cursor-pointer mr-6"
          alt="volume button"
          onClick={() => setShowVolume((prev) => !prev)}
        />

        {showVolume && (
          <div className="absolute flex justify-center items-center -rotate-90 -left-12 bottom-24">
            <input
              value={volume}
              type="range"
              min={0}
              max={100}
              onChange={(e) => onVolumeChange(e)}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </>
  );
};
export default Volume;
