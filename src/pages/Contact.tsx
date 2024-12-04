import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 bg-ripple-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-military font-bold text-white mb-8">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community and get in touch with the XRPNAVY team!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Telegram Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue rounded-lg shadow-xl p-8"
          >
            <h2 className="text-3xl font-military font-bold text-gold mb-8">
              Direct Message Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-gold">📱</div>
                <div>
                  <h3 className="text-xl font-military font-bold text-white mb-4">
                    Join us on Telegram
                  </h3>
                  <p className="text-gray-300 mb-6">
                    For the fastest response, message us directly on Telegram. Our team is ready to assist you!
                  </p>
                  <motion.a
                    href="https://t.me/XRP_NAVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-xrp-blue text-white px-6 py-3 rounded-lg font-military font-bold hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Message Us</span>
                    <span className="text-xl">→</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue rounded-lg shadow-xl p-8"
          >
            <h2 className="text-3xl font-military font-bold text-gold mb-8">
              Connect With Us
            </h2>
            <div className="space-y-6">
              <a
                href="https://x.com/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white hover:text-gold transition-colors p-4 rounded-lg bg-ripple-blue/50"
              >
                <span className="text-2xl">🐦</span>
                <div>
                  <h3 className="font-military font-bold">Twitter</h3>
                  <p className="text-sm text-gray-300">Follow us for updates</p>
                </div>
              </a>

              <a
                href="https://linktr.ee/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white hover:text-gold transition-colors p-4 rounded-lg bg-ripple-blue/50"
              >
                <span className="text-2xl">🔗</span>
                <div>
                  <h3 className="font-military font-bold">Linktree</h3>
                  <p className="text-sm text-gray-300">All our important links</p>
                </div>
              </a>

              <div className="bg-ripple-blue/30 p-4 rounded-lg border border-gold/20 mt-8">
                <p className="text-gold font-military text-center italic">
                  "Join the fleet that's making waves in the XRP ecosystem!" 🚀
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 