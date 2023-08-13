import PageHeader from '@/components/PageHeader';
import Singers from '@/components/layout/singers/Singers';
import Songs from '@/components/layout/songs/Songs';
import Nav from '@/components/navigation/Nav';

export const metadata = {
  title: 'Beatfolio | Users',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
};

export default function UsersLayout({ children }) {
  return (
    <main className="h-screen flex relative">
      <Nav />

      <section className="w-full relative grid grid-cols-9">
        <PageHeader isGrid={true} />

        <section className="col-span-6 overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
          {children}
        </section>

        <aside className="col-span-3 px-2 overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
          <Songs heading="New Releases" url="" songs={''} />
          <Songs heading="Top Releases" url="" songs={''} />
          <Singers url="" singers="" />
        </aside>
      </section>
    </main>
  );
}
