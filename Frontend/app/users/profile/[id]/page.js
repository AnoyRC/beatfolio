'use client';

import ProfileHero from '@/components/layout/profile/ProfileHero';
import ProfileBio from '@/components/layout/profile/ProfileBio';
import ProfileTabs from '@/components/layout/profile/ProfileTabs';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import useAudius from '@/hooks/useAudius';

export default function Page() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const { getUser } = useAudius();

  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  return (
    user && (
      <section>
        <ProfileHero
          coverImage={user?.cover_photo ? user.cover_photo['640x'] : ''}
          profileImage={user.profile_picture['150x150']}
          userId={user.id}
        />
        <ProfileBio
          userName={user.name}
          userBio={user.bio}
          userFollowers={user.follower_count}
          userFollowing={user.followee_count}
        />
        <ProfileTabs id={id} />
      </section>
    )
  );
}
