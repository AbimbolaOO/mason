import type { Metadata } from 'next';
import '../globals.css';

import { ABeeZee, Advent_Pro } from 'next/font/google';

import Header from '@/components/Header/Header';

import StoreProvider from './StoreProvider.tsx';

const aBeeZee = ABeeZee({
  variable: '--aBeeZee',
  subsets: ['latin'],
  weight: '400',
});

const adventPro = Advent_Pro({
  variable: '--font-adventPro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${aBeeZee.className} ${aBeeZee.variable} ${adventPro.variable} antialiased flex flex-col scroll-smooth overscroll-none`}
      >
        <StoreProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </StoreProvider>
      </body>
    </html>
  );
}
