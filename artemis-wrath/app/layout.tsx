import type { Metadata } from 'next';
import { Poppins, Ysabeau_SC } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';

const ysabeau = Ysabeau_SC({
  subsets: ['latin'],
  weight: ['100', '200', '500', '300', '400', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Artemis' Wrath",
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={ysabeau.className}>
          <NavBar />
          <div className='mt-20'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
