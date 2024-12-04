'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-24 md:h-16"></div>
      
      {/* Fixed Navigation Header */}
      <nav className="bg-navy-blue shadow-lg fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo1.png" 
                  alt="XRPNAVY Logo" 
                  className="h-12 w-12 object-contain" 
                />
                <span className="ml-3 text-2xl font-military font-bold text-white">$XRPNAVY</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2 md:mt-0">
              <div className="flex flex-wrap justify-center gap-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/roadmap">Roadmap</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              <motion.a
                href="https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 font-military font-bold text-black bg-gold rounded-lg hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BUY NOW
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link
      to={to}
      className="px-4 py-2 rounded-md text-base font-medium text-white hover:bg-xrp-blue hover:text-white transition-colors whitespace-nowrap"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navigation; 