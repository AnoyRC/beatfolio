import PageHeader from '@/components/PageHeader';
import Nav from '@/components/navigation/Nav';

export const metadata = {
  title: 'Beatfolio | Users',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
};

export default function UsersLayout({ children }) {
  return (
    <main className="h-screen flex max-w-7xl relative mx-auto">
      <Nav />

      <section className="w-full">
        <PageHeader />
        {children}
      </section>
    </main>
  );
}
