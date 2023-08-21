import './globals.css';
import { Inter } from 'next/font/google';
import WalletsProvider from '@/provider/WalletsProvider';
import ReduxProvider from '@/provider/ReduxProvider';
import SignupModal from '@/components/modal/SignupModal';
import AddSongModal from '@/components/modal/AddSongModal';
import MusicModal from '@/components/modal/MusicModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  creator: 'Gautam Raj',
  publisher: 'Gautam Raj',
  title: 'Beatfolio',
  applicationName: 'Beatfolio',
  description:
    'A decentralized social media platform tailored exclusively for artists, musicians, and creators.',
  keywords: [
    'Beatfolio',
    'Music',
    'Decentralized',
    'Social Media',
    'Artists',
    'Songs',
    'Creators',
    'NFTs',
    'NFT',
    'Blockchain',
    'Crypto',
    'Ethereum',
    'ETH',
    'Web3',
    'Metamask',
    'Wallet',
    'Wallets',
    'Musician',
    'Artist',
    'Creator',
    'Song',
    'Songs',
    'Token',
    'Tokens',
    'Tokenized',
    'Tokenized Music',
    'Tokenized Songs',
    'Tokenized Art',
    'Tokenized Creations',
    'Tokenized Creators',
    'Tokenized Artists',
    'Tokenized Musicians',
    'Tokenized NFTs',
    'Tokenized NFT',
    'Tokenized Non-Fungible Tokens',
    'Tokenized Non-Fungible Token',
    'Tokenized Non Fungible Tokens',
    'Tokenized Non Fungible Token',
    'Tokenized NFTs',
    'Tokenized NFT',
    'Tokenized Non-Fungible Tokens',
    'Tokenized Non-Fungible Token',
    'Tokenized Non Fungible Tokens',
    'Tokenized Non Fungible Token',
    'Tokenized NFTs',
    'Tokenized NFT',
    'Tokenized Non-Fungible Tokens',
    'Tokenized Non-Fungible Token',
    'Tokenized Non Fungible Tokens',
    'Tokenized Non Fungible Token',
  ],
  authors: [{ name: 'Gautam Raj', url: 'https://gautam-raj.vercel.app' }],

  icons: {
    shortcut: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'apple-touch-icon-180x180-precomposed',
        url: '/apple-touch-icon-180x180-precomposed.png',
      },
    ],
  },

  appleWebApp: {
    title: 'Equal Reach',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ' h-screen overflow-hidden max-w-7xl mx-auto relative'
        }
      >
        <ReduxProvider>
          <WalletsProvider>
            <MusicModal />
            <SignupModal />
            <AddSongModal />
            {children}
          </WalletsProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
