'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import '../index.css';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ripple-blue">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo1.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001F3F" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
} 