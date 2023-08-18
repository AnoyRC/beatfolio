import './globals.css';
import { Inter } from 'next/font/google';
import WalletsProvider from '@/provider/WalletsProvider';
import ReduxProvider from '@/provider/ReduxProvider';
import SignupModal from '@/components/modal/SignupModal';
import AddSongModal from '@/components/modal/AddSongModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beatfolio',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + ' h-screen overflow-hidden max-w-7xl mx-auto'
        }
      >
        <ReduxProvider>
          <WalletsProvider>
            {/* <SignupModal /> */}
            <AddSongModal />
            {children}
          </WalletsProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
