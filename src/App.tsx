'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLink, BuyNowButton } from './components/Navigation';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (router.pathname) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/roadmap':
        return <Roadmap />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-ripple-blue text-white">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-navy-blue shadow-lg relative z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo1.png" 
                  alt="XRPNAVY Logo" 
                  className="h-10 w-10 object-contain flex-shrink-0" 
                />
                <span className="ml-3 text-xl font-military font-bold">$XRPNAVY</span>
              </Link>
            </div>
            
            {/* Desktop Navigation and Buy Button */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/roadmap">Roadmap</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <BuyNowButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gold focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy-blue border-t border-gray-700 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="/roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</MobileNavLink>
                <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                <div className="pt-2 mt-2 border-t border-gray-700">
                  <a
                    href="https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gold hover:bg-gold hover:text-navy-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="overflow-x-hidden">
        <React.Suspense fallback={
          <div className="flex items-center justify-center h-screen">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-24 w-24 md:h-32 md:w-32 border-t-2 border-b-2 border-xrp-blue"
            />
          </div>
        }>
          {renderContent()}
        </React.Suspense>
      </main>

      <footer className="bg-navy-blue mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-center md:text-left truncate">
              © 2024 $XRPNAVY. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors whitespace-nowrap"
              >
                Twitter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://t.me/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors whitespace-nowrap"
              >
                Telegram
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linktr.ee/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors whitespace-nowrap"
              >
                Linktree
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-xrp-blue hover:text-white transition-colors truncate"
  >
    {children}
  </Link>
);

export default App;
