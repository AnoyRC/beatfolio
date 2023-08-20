'use client';

import Image from 'next/image';
import SingerDetails from './SingerDetails';
import { useRouter } from 'next/navigation';

const SingerItem = ({ id, singerImage, singerName, subscribers }) => {
  const router = useRouter();

  return (
    <section
      className="flex gap-5 hover:bg-gray-50/5 rounded-lg cursor-pointer p-2"
      onClick={() => router.push(`/users/profile/${id}`)}
    >
      <Image
        src={singerImage ? singerImage : '/song-photos/song-photo-1.png'}
        alt="Singer Image"
        width={100}
        height={100}
        className="rounded-lg h-[100px] w-[100px]"
      />

      <SingerDetails
        subscribers={subscribers ? subscribers : '0 Subscribers'}
        singerName={singerName ? singerName : 'Singer Name'}
      />

      <Image
        src="/visit-arrow.svg"
        alt="Visit"
        width={28}
        height={28}
        className="ml-auto"
      />
    </section>
  );
};

export default SingerItem;
