import Nav from '@/components/navigation/Nav';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Beatfolio | Artists',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
};

export default function ArtistsLayout({ children }) {
  return (
    <main className="h-screen flex relative">
      <Nav />

      <section className="w-full overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
        <PageHeader title="Artists" />
        {children}
      </section>
    </main>
  );
}
