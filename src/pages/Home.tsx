import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/logo1.png"
              alt="XRPNAVY Logo"
              className="mx-auto h-48 w-48 object-contain mb-12 drop-shadow-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-military font-bold text-white mb-6">
              "What we do in life echoes in eternity"
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-military">
              This is not a memecoin. This is the movement.
            </p>
            <div className="bg-navy-blue/50 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
              <p className="text-sm text-gold font-military">Token Issuer</p>
              <p className="text-white font-mono text-sm break-all">r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N</p>
            </div>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-xrp-blue text-white px-8 py-3 rounded-lg font-military font-bold hover:bg-blue-600 transition-colors"
              >
                Join the Movement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-military font-bold hover:bg-gold hover:text-navy-blue transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-navy-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-military font-bold text-gold mb-6">
              This is the Movement
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              That will bring the attention back to XRP
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              That will make all the haters who did not trust XRP regret it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-ripple-blue p-6 rounded-lg shadow-xl"
              >
                <div className="text-gold text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-military font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Defines Us */}
      <section className="py-20 bg-gradient-to-r from-navy-blue to-ripple-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-military font-bold text-white mb-6">
              What Defines Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Memecoins are taking over this market, but XRP Navy goes beyond gambling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-navy-blue p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-military font-bold text-gold mb-4">Mission</h3>
              <p className="text-gray-300">
                We want to be the reference currency within the Ripple ecosystem and demonstrate that,
                despite the impediments of the SEC, this ecosystem will shine with its own light and
                bring wealth to its community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-navy-blue p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-military font-bold text-gold mb-4">Vision</h3>
              <p className="text-gray-300">
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