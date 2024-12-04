'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BrowserRouter } from 'react-router-dom';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'XRPNAVY',
  description: 'Where Naval Excellence Meets Cryptocurrency Innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </body>
    </html>
  );
} 