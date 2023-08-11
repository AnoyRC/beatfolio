import Nav from '@/components/navigation/Nav';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Beatfolio | Artists',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
};

export default function ArtistsLayout({ children }) {
  return (
    <main className="h-screen flex max-w-7xl relative mx-auto">
      <Nav />

      <section className="w-full">
        <PageHeader title="Artists" />
        {children}
      </section>
    </main>
  );
}
