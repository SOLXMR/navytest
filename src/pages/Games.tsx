import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Games = () => {
  const games = [
    {
      title: "XRP Fleet Commander",
      description: "Command your XRP fleet in this naval themed game",
      icon: "🚢",
      path: "/games/fleet-commander",
      status: "Ready to Play",
      buttonText: "Play Now"
    },
    {
      title: "Coming Soon",
      description: "More exciting games are on the horizon. Stay tuned!",
      icon: "🎮",
      path: "#",
      status: "In Development",
      buttonText: "Coming Soon",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-ripple-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-military font-bold text-white mb-6">
            XRP Navy <span className="text-gold">Games</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Engage in naval-themed crypto games while exploring the XRP ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-navy-blue rounded-lg overflow-hidden shadow-xl"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-2xl font-military font-bold text-white mb-2">
                  {game.title}
                </h3>
                <p className="text-gray-300 mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    game.status === "Ready to Play" ? "text-green-400" : "text-yellow-400"
                  }`}>
                    {game.status}
                  </span>
                  <Link
                    to={game.path}
                    className={`px-6 py-2 rounded-lg font-military font-bold transition-all ${
                      game.disabled
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gold text-black hover:bg-opacity-90"
                    }`}
                  >
                    {game.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games; 