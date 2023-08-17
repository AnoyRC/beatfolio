import ProfileHero from '@/components/layout/profile/ProfileHero';
import ProfileBio from '@/components/layout/profile/ProfileBio';
import ProfileTabs from '@/components/layout/profile/ProfileTabs';

export default function Page() {
  return (
    <section>
      <ProfileHero />
      <ProfileBio />
      <ProfileTabs />
    </section>
  );
}
