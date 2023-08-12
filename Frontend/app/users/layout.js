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

      <section className="w-full">
        <PageHeader />

        <div className="h-screen flex relative">
          <section className="w-2/3 overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
            {children}
          </section>

          <aside className="w-1/3 mb-16 px-2 overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
            <Songs heading="New Releases" url="" songs={''} />
            <Songs heading="Top Releases" url="" songs={''} />
            <Singers url="" singers="" />
          </aside>
        </div>
      </section>
    </main>
  );
}
