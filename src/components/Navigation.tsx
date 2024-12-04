'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-xrp-blue hover:text-white transition-colors"
    >
      {children}
    </Link>
  </motion.div>
);

export const BuyNowButton = () => (
  <motion.a
    href="https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center px-6 py-2 font-military font-bold text-black bg-gold rounded-lg overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="absolute w-full h-full bg-gradient-to-r from-gold via-yellow-400 to-gold opacity-75 blur-lg group-hover:opacity-100 animate-glow"></span>
    <span className="relative flex items-center">
      <span className="mr-1">⚡</span>
      BUY NOW
    </span>
  </motion.a>
); 