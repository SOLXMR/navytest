import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/xrpback.png';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            opacity: '0.2',
            mixBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img
              src="/logo1.png"
              alt="XRPNAVY Logo"
              className="mx-auto h-32 w-32 sm:h-48 sm:w-48 object-contain mb-8 sm:mb-12 drop-shadow-2xl"
            />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-military font-bold text-white mb-4 sm:mb-6 leading-tight break-words max-w-[90vw] sm:max-w-3xl">
              "What we do in life echoes in eternity"
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 font-military px-2 break-words max-w-[90vw] sm:max-w-2xl">
              This is not a memecoin. This is the movement.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-military mb-6 sm:mb-8 px-2 break-words max-w-[90vw] sm:max-w-2xl" style={{ color: 'var(--gold)' }}>
              XRP is here to stay, and XRPNavy is here to defend.
            </p>
            <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 w-full max-w-[90vw] sm:max-w-md mx-auto overflow-hidden">
              <p className="text-sm text-gold font-military truncate">Token Issuer / Contract Address</p>
              <p className="text-white font-mono text-xs sm:text-sm break-all overflow-wrap-anywhere">r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-[90vw] sm:w-auto px-4">
              <motion.a
                href="https://t.me/XRPNAVY"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-xrp-blue text-white px-6 sm:px-8 py-3 rounded-lg font-military font-bold hover:bg-blue-600 transition-colors w-full sm:w-auto text-center whitespace-nowrap"
              >
                Join the Movement
              </motion.a>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gold text-gold px-6 sm:px-8 py-3 rounded-lg font-military font-bold hover:bg-gold hover:text-navy-blue transition-colors w-full sm:w-auto whitespace-nowrap"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-4 sm:mb-6 break-words">
              This is the Movement
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-3xl mx-auto mb-3 sm:mb-4 px-2 break-words">
              That will bring the attention back to XRP
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-ripple-blue p-4 sm:p-6 rounded-lg shadow-xl overflow-hidden"
              >
                <div className="text-gold text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-military font-bold mb-2 break-words">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base break-words">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Defines Us */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-navy-blue to-ripple-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-military font-bold text-white mb-4 sm:mb-6 break-words">
              What Defines Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-3xl mx-auto px-2 break-words">
              Memecoins are taking over this market, but XRP Navy goes beyond gambling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-navy-blue p-6 sm:p-8 rounded-lg shadow-xl overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-military font-bold text-gold mb-3 sm:mb-4 break-words">Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base break-words">
                We want to be the reference currency within the Ripple ecosystem and demonstrate that,
                despite the impediments of the SEC, this ecosystem will shine with its own light and
                bring wealth to its community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-navy-blue p-6 sm:p-8 rounded-lg shadow-xl overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-military font-bold text-gold mb-3 sm:mb-4 break-words">Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base break-words">
                A change in the memecoins paradigm is possible. We want to build a community that
                prevails against the drift of a market full of mercenaries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: "⚓",
    title: "Transparency",
    description: "Building trust through open and honest operations within the XRP ecosystem.",
  },
  {
    icon: "🌊",
    title: "Naval Command",
    description: "Leading with military precision and unified strength in the crypto seas.",
  },
  {
    icon: "🚀",
    title: "Long-term Vision",
    description: "Creating sustainable value beyond short-term market fluctuations.",
  },
];

export default Home; 