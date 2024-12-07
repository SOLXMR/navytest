import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-12 sm:py-20 bg-ripple-blue">
      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-military font-bold text-white mb-6 sm:mb-8 break-words">
            About <span className="text-gold">XRP Navy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-3xl mx-auto break-words">
            Memecoins are taking over this market, but XRP Navy goes beyond gambling.
            We are building a movement that will redefine the cryptocurrency landscape.
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue p-6 sm:p-8 rounded-lg shadow-xl overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-4 sm:mb-6 break-words">Our Values</h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base break-words">
              In the vast ocean of memecoins, we sail with purpose. The XRP Navy isn't just another 
              ship in the fleet - we're the whole damn armada! And we're here to show that 
              even in the wildest waters of crypto, we can have fun while staying true to our course.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gold mr-2 flex-shrink-0">{value.icon}</span>
                  <span className="break-words">
                    <strong className="text-gold">{value.title}:</strong> {value.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-4 sm:mt-6 italic text-sm sm:text-base break-words">
              Remember sailor: What we do in life ripples in eternity... and on the blockchain!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue p-6 sm:p-8 rounded-lg shadow-xl overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-4 sm:mb-6 break-words">Our Battle Plan</h2>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-military font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-3 flex-shrink-0">🎯</span>
                  <span className="break-words">Mission Briefing</span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base break-words">
                  Attention on deck! As the NAVY of the XRP Ledger, we stand as its 
                  steadfast defenders and guardians. Our primary mission is clear: to protect 
                  and strengthen the XRP ecosystem through unwavering vigilance and strategic 
                  operations. Just as a navy safeguards its nation's waters, we are committed 
                  to defending the integrity and security of the XRP Ledger. Stand ready, 
                  sailors - we are the shield that protects the future of digital finance. ⚓
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-military font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-3 flex-shrink-0">🔭</span>
                  <span className="break-words">Naval Intelligence Report</span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base break-words">
                  Our intelligence confirms what we've known all along - the XRP Ledger 
                  requires a dedicated force to protect its interests and ensure its success. 
                  We're assembling an elite fleet of steadfast defenders, committed to 
                  safeguarding the ecosystem against any threats. The NAVY stands ready 
                  to deploy at a moment's notice. 🛡️
                </p>
              </div>

              <div className="bg-ripple-blue/30 p-4 rounded-lg border border-gold/20">
                <p className="text-gold font-military text-center italic text-sm sm:text-base break-words">
                  "They laughed at XRP, called it a security... <br/>
                  Now watch us secure these gains!" 💪
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Token Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-navy-blue to-ripple-blue p-6 sm:p-8 rounded-lg shadow-xl overflow-hidden"
        >
          <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-6 sm:mb-8 text-center break-words">
            Ship's Manifest
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 overflow-hidden">
              <h3 className="text-lg sm:text-xl font-military font-bold text-white mb-3 sm:mb-4 break-words">Token Issuer</h3>
              <p className="font-mono text-xs sm:text-sm break-all text-gold mb-2 overflow-wrap-anywhere">
                r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N
              </p>
              <p className="text-green-400 text-xs sm:text-sm">
                🔒 Blackholed - Contract is locked and secure!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 overflow-hidden">
                <h3 className="text-lg sm:text-xl font-military font-bold text-gold mb-3 sm:mb-4 flex items-center break-words">
                  <span className="text-xl sm:text-2xl mr-2 flex-shrink-0">🎯</span>
                  <span>Total Supply</span>
                </h3>
                <p className="text-2xl sm:text-4xl font-military text-white mb-2 break-words">589,000,000</p>
                <p className="text-gray-300 text-xs sm:text-sm italic break-words">
                  Yes, THAT famous XRP prophecy number! 🔮
                </p>
              </div>

              <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 overflow-hidden">
                <h3 className="text-lg sm:text-xl font-military font-bold text-gold mb-3 sm:mb-4 flex items-center break-words">
                  <span className="text-xl sm:text-2xl mr-2 flex-shrink-0">🔥</span>
                  <span>Liquidity Pool</span>
                </h3>
                <p className="text-xl sm:text-2xl font-military text-white mb-2 break-words">12% Burned Forever</p>
                <p className="text-gray-300 text-xs sm:text-sm italic break-words">
                  What's burned is burned - no rug pulls here! 🚫
                </p>
              </div>
            </div>

            <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 overflow-hidden">
              <h3 className="text-lg sm:text-xl font-military font-bold text-gold mb-3 sm:mb-4 flex items-center break-words">
                <span className="text-xl sm:text-2xl mr-2 flex-shrink-0">📊</span>
                <span>Token Distribution</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm sm:text-base">Dev Wallet:</span>
                  <span className="text-gold font-military text-sm sm:text-base">5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm sm:text-base">Liquidity Pool:</span>
                  <span className="text-gold font-military text-sm sm:text-base">12% (Burned 🔥)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-ripple-blue/30 p-4 rounded-lg border border-gold/20">
              <p className="text-center text-gold font-military text-sm sm:text-base break-words">
                "589 million tokens, 12% burned LP, 5% dev allocation...<br/>
                Perfectly balanced, as all things should be!" ⚖️
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const values = [
  {
    icon: "⚓",
    title: "Unwavering Defense",
    description: "Standing guard over the XRP Ledger with vigilance and determination"
  },
  {
    icon: "🛡️",
    title: "Strategic Command",
    description: "Coordinating operations to protect and strengthen the XRP ecosystem"
  },
  {
    icon: "🎯",
    title: "Mission Focus",
    description: "Dedicated to securing the future of the XRP Ledger"
  },
  {
    icon: "⚔️",
    title: "Combat Ready",
    description: "Always prepared to defend against threats to our ecosystem"
  },
  {
    icon: "🔱",
    title: "Naval Discipline",
    description: "Operating with military precision and unwavering loyalty"
  }
];

export default About; 