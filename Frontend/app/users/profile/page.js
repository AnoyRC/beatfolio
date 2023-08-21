'use client';

import ProfileHero from '@/components/layout/profile/ProfileHero';
import ProfileBio from '@/components/layout/profile/ProfileBio';
import ProfileTabs from '@/components/layout/profile/ProfileTabs';

import { useSelector } from 'react-redux';

export default function Page() {
  const currentUser = useSelector((state) => state.crossmint.currentUser);
  console.log(currentUser);

  return (
    currentUser && (
      <section>
        <ProfileHero profileImage={currentUser.metadata.image} />
        <ProfileBio
          userName={currentUser.metadata.name}
          userBio={currentUser.metadata.description}
        />
        {/* <ProfileTabs /> */}
      </section>
    )
  );
}
