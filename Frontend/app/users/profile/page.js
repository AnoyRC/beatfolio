'use client';

import ProfileHero from '@/components/layout/profile/ProfileHero';
import ProfileBio from '@/components/layout/profile/ProfileBio';
import Web2ProfileTabs from '@/components/layout/profile/Web2ProfileTabs';

import { useSelector } from 'react-redux';

export default function Page() {
  const currentUser = useSelector((state) => state.crossmint.currentUser);

  return (
    currentUser && (
      <section>
        <ProfileHero
          coverImage={'/song-photos/song-photo-2.png'}
          profileImage={currentUser.metadata.image}
        />
        <ProfileBio
          userName={currentUser.metadata.name}
          userBio={currentUser.metadata.description}
        />
        <Web2ProfileTabs id={currentUser.id} name={currentUser.metadata.name} />
      </section>
    )
  );
}
