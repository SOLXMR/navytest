import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '$XRPNAVY - The Movement',
  description: 'This is not a memecoin. This is the movement. XRP is here to stay, and XRPNavy is here to defend.',
  metadataBase: new URL('https://www.xrpnavy.com'),
  openGraph: {
    type: 'website',
    url: 'https://www.xrpnavy.com',
    title: '$XRPNAVY - The Movement',
    description: 'This is not a memecoin. This is the movement. XRP is here to stay, and XRPNavy is here to defend.',
    siteName: '$XRPNAVY',
    images: [
      {
        url: '/logo1.png',
        width: 800,
        height: 800,
        alt: 'XRPNAVY Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@XRPNAVY',
    creator: '@XRPNAVY',
    title: '$XRPNAVY - The Movement',
    description: 'This is not a memecoin. This is the movement. XRP is here to stay, and XRPNavy is here to defend.',
    images: ['/logo1.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo1.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo1.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta name="theme-color" content="#001F3F" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 