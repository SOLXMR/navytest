import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 sm:py-20 bg-ripple-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-5xl font-military font-bold text-white mb-6 sm:mb-8 break-words">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-3xl mx-auto break-words">
            Join our community and get in touch with the XRPNAVY team!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {/* Telegram Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue rounded-lg shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-6 sm:mb-8 break-words">
              Direct Message Us
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl sm:text-4xl text-gold flex-shrink-0">📱</div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-military font-bold text-white mb-3 sm:mb-4 break-words">
                    Join us on Telegram
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base break-words">
                    For the fastest response, message us directly on Telegram. Our team is ready to assist you!
                  </p>
                  <motion.a
                    href="https://t.me/XRP_NAVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-xrp-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-military font-bold hover:bg-blue-600 transition-colors text-sm sm:text-base whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Message Us</span>
                    <span className="text-lg sm:text-xl">→</span>
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
            className="bg-navy-blue rounded-lg shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-6 sm:mb-8 break-words">
              Connect With Us
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <a
                href="https://x.com/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white hover:text-gold transition-colors p-3 sm:p-4 rounded-lg bg-ripple-blue/50"
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">🐦</span>
                <div className="min-w-0">
                  <h3 className="font-military font-bold text-sm sm:text-base break-words">Twitter</h3>
                  <p className="text-xs sm:text-sm text-gray-300 break-words">Follow us for updates</p>
                </div>
              </a>

              <a
                href="https://linktr.ee/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white hover:text-gold transition-colors p-3 sm:p-4 rounded-lg bg-ripple-blue/50"
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">🔗</span>
                <div className="min-w-0">
                  <h3 className="font-military font-bold text-sm sm:text-base break-words">Linktree</h3>
                  <p className="text-xs sm:text-sm text-gray-300 break-words">All our important links</p>
                </div>
              </a>

              <div className="bg-ripple-blue/30 p-4 rounded-lg border border-gold/20 mt-6 sm:mt-8">
                <p className="text-gold font-military text-center italic text-sm sm:text-base break-words">
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