'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
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
            Welcome to $XRPNAVY
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            This is not a memecoin. This is the movement.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 