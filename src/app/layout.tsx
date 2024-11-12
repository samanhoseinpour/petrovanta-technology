import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'lenis/dist/lenis.css';

import { Navbar, Footer, Banner } from '@/components';
import { ReactLenis } from '@/utils/lenis';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Petrovanta Energy Technology - Leading Oil Well Solutions',
  description:
    'Petrovanta Energy Technology specializes in innovative oil well solutions and energy technology advancements. Our expertise drives efficiency, safety, and sustainability in the oil and gas sector.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Banner title="Our website is currently under development for improvement." />
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
