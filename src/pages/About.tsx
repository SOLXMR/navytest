import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-ripple-blue">
      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-military font-bold text-white mb-8">
            About <span className="text-gold">XRP Navy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Memecoins are taking over this market, but XRP Navy goes beyond gambling.
            We are building a movement that will redefine the cryptocurrency landscape.
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-3xl font-military font-bold text-gold mb-6">Our Values</h2>
            <p className="text-gray-300 mb-6">
              In the vast ocean of memecoins, we sail with purpose. The XRP Navy isn't just another 
              ship in the fleet - we're the whole damn armada! And we're here to show that 
              even in the wildest waters of crypto, we can have fun while staying true to our course.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">⚓</span>
                <span>
                  <strong className="text-gold">Naval Precision:</strong> We run this ship tighter than 
                  your portfolio during a bull run!
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">🌊</span>
                <span>
                  <strong className="text-gold">Wave Makers:</strong> When we move, the whole market 
                  feels the ripple effect (pun intended)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">🎯</span>
                <span>
                  <strong className="text-gold">Clear Vision:</strong> While others are playing in 
                  puddles, we're navigating the seven seas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">💪</span>
                <span>
                  <strong className="text-gold">Community Power:</strong> Our crew is stronger than 
                  a whale's market impact
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">🚀</span>
                <span>
                  <strong className="text-gold">Innovation Command:</strong> We're not just along 
                  for the ride, we're steering this ship to the moon!
                </span>
              </li>
            </ul>
            <p className="text-gray-300 mt-6 italic">
              Remember sailor: What we do in life ripples in eternity... and on the blockchain!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-3xl font-military font-bold text-gold mb-6">Our Battle Plan</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-military font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span> Mission Briefing
                </h3>
                <p className="text-gray-300">
                  Listen up, sailors! While the SEC is busy trying to figure out if water is wet, 
                  we're out here turning the XRP ecosystem into the greatest show on the blockchain. 
                  We're not just another memecoin doing backflips in the crypto pool - we're the 
                  whole naval parade! Our mission? To make the XRP army so bright, even the SEC 
                  will need sunglasses. 🕶️
                </p>
              </div>

              <div>
                <h3 className="text-xl font-military font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔭</span> Naval Intelligence Report
                </h3>
                <p className="text-gray-300">
                  While other memecoins are playing "wen moon" in their kiddie pools, we're charting 
                  a course through the seven seas of crypto. Our intel suggests that building a 
                  community of diamond-handed sailors is better than a fleet of paper-handed 
                  mercenaries. And guess what? We're recruiting the craziest, most dedicated crew 
                  this side of the blockchain! 🏴‍☠️
                </p>
              </div>

              <div className="bg-ripple-blue/30 p-4 rounded-lg border border-gold/20">
                <p className="text-gold font-military text-center italic">
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
          className="bg-gradient-to-r from-navy-blue to-ripple-blue p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-military font-bold text-gold mb-8 text-center">
            Ship's Manifest
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-military font-bold text-white mb-4">Token Issuer</h3>
              <p className="font-mono text-sm break-all text-gold mb-2">
                r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N
              </p>
              <p className="text-green-400 text-sm">
                🔒 Blackholed - Contract is locked and secure!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-military font-bold text-gold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎯</span> Total Supply
                </h3>
                <p className="text-4xl font-military text-white mb-2">589,000,000</p>
                <p className="text-gray-300 text-sm italic">
                  Yes, THAT famous XRP prophecy number! 🔮
                </p>
              </div>

              <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-military font-bold text-gold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🔥</span> Liquidity Pool
                </h3>
                <p className="text-2xl font-military text-white mb-2">12% Burned Forever</p>
                <p className="text-gray-300 text-sm italic">
                  What's burned is burned - no rug pulls here! 🚫
                </p>
              </div>
            </div>

            <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-military font-bold text-gold mb-4 flex items-center">
                <span className="text-2xl mr-2">📊</span> Token Distribution
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Dev Wallet:</span>
                  <span className="text-gold font-military">5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Liquidity Pool:</span>
                  <span className="text-gold font-military">12% (Burned 🔥)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-ripple-blue/30 p-4 rounded-lg border border-gold/20">
              <p className="text-center text-gold font-military">
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

export default About; 