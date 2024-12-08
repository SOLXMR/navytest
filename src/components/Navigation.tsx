'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-28 md:h-16"></div>
      
      {/* Fixed Navigation Header */}
      <nav className="bg-navy-blue shadow-lg fixed w-full top-0 left-0 z-50 py-1 md:py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* First Row - Logo and Buy Button */}
            <div className="flex items-center justify-between py-1">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/logo1.png" 
                    alt="XRPNAVY Logo" 
                    className="h-8 w-8 object-contain" 
                  />
                  <span className="ml-2 text-lg font-military font-bold text-white">$XRPNAVY</span>
                </Link>
              </div>
              
              <motion.a
                href="https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm font-military font-bold text-black bg-gold rounded-lg hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BUY NOW
              </motion.a>
            </div>

            {/* Second Row - Navigation Links */}
            <div className="flex justify-center pt-1">
              <div className="grid grid-cols-5 gap-1 w-full">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/games">Game</NavLink>
                <NavLink to="/roadmap">Road</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo1.png" 
                  alt="XRPNAVY Logo" 
                  className="h-12 w-12 object-contain" 
                />
                <span className="ml-2 text-2xl font-military font-bold text-white">$XRPNAVY</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/games">Game</NavLink>
                <NavLink to="/roadmap">Road</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              <motion.a
                href="https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-base font-military font-bold text-black bg-gold rounded-lg hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap"
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
  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto">
    <Link
      to={to}
      className="px-2 py-1 md:px-4 md:py-2 rounded-lg font-medium text-white hover:bg-xrp-blue hover:text-white transition-colors whitespace-nowrap text-center text-sm md:text-base block"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navigation; 