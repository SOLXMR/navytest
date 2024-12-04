import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
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
  );
};

export default Footer; 