'use client';

import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-xrp-blue hover:text-white transition-colors"
    >
      {children}
    </Link>
  </motion.div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>XRPNAVY - Naval Excellence Meets Cryptocurrency</title>
        <meta name="description" content="Where Naval Excellence Meets Cryptocurrency Innovation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-ripple-blue text-white">
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-navy-blue shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <img 
                      src="/logo1.png" 
                      alt="XRPNAVY Logo" 
                      className="h-10 w-10 object-contain" 
                    />
                    <span className="ml-3 text-xl font-military font-bold">$XRPNAVY</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/roadmap">Roadmap</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </motion.nav>

          <main>
            {children}
          </main>

          <footer className="bg-navy-blue mt-auto py-6">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  © 2024 $XRPNAVY. All rights reserved.
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://x.com/XRPNAVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    Twitter
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://t.me/XRPNAVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    Telegram
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://linktr.ee/XRPNAVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    Linktree
                  </motion.a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 