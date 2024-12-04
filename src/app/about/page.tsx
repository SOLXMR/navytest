'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-ripple-blue py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-military font-bold text-white mb-6">
            About $XRPNAVY
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            XRP is here to stay, and XRPNavy is here to defend.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 