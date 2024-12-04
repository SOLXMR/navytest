import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
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
            Project <span className="text-gold">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic plan for development and growth, combining military precision
            with blockchain innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div className="bg-navy-blue p-6 rounded-lg shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl text-gold mr-4">{item.icon}</div>
                      <h3 className="text-2xl font-military font-bold text-white">
                        {item.phase}
                      </h3>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-xrp-blue text-white text-sm px-3 py-1 rounded-full">
                        {item.timeline}
                      </span>
                    </div>
                    <ul className="text-gray-300 space-y-4">
                      {item.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`mr-2 ${milestone.completed ? 'text-green-400' : 'text-gold'}`}>
                            {milestone.completed ? '✓' : '•'}
                          </span>
                          <div>
                            <p className={milestone.completed ? 'text-green-400' : 'text-gray-300'}>
                              {milestone.text}
                            </p>
                            {milestone.link && (
                              <a
                                href={milestone.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-xrp-blue hover:text-gold transition-colors break-all"
                              >
                                {milestone.link}
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    {item.status && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <span className={`text-sm ${getStatusColor(item.status)}`}>
                          Status: {item.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Point */}
                <div className={`w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 ${
                  item.status === 'Completed' ? 'bg-green-400' : 'bg-gold'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-military font-bold text-gold mb-6">
            Future Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey continues beyond these milestones as we work to revolutionize
            the intersection of military precision and blockchain technology.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const roadmapItems = [
  {
    phase: "Phase 1: Initial Launch",
    icon: "🚀",
    timeline: "Q1 2024",
    status: "Completed",
    milestones: [
      {
        text: "Token Launch on FirstLedger",
        completed: true,
        link: "https://firstledger.net/token/r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N/5852504E41565900000000000000000000000000"
      },
      {
        text: "Community Building Initiatives",
        completed: true
      },
      {
        text: "Social Media Presence Establishment",
        completed: true
      },
    ],
  },
  {
    phase: "Phase 2: Market Integration",
    icon: "📊",
    timeline: "Q1 2024",
    status: "Completed",
    milestones: [
      {
        text: "DEX Screener Listing",
        completed: true,
        link: "https://dexscreener.com/xrpl/5852504e41565900000000000000000000000000.r4ap9qunguqb4qhnapgwcyduad2ycrmo3n_xrp"
      },
      {
        text: "Magnetic Exchange Listing",
        completed: true,
        link: "https://xmagnetic.org/tokens/XRPNAVY+r4Ap9QUNgUqB4QHNapgwcyduaD2YCrmo3N?network=mainnet"
      },
      {
        text: "Liquidity Pool Establishment",
        completed: true
      },
    ],
  },
  {
    phase: "Phase 3: Community Expansion",
    icon: "🌐",
    timeline: "Q2 2024",
    status: "In Progress",
    milestones: [
      {
        text: "Marketing Campaign Deployment",
        completed: false
      },
      {
        text: "Liquidity Provision Enhancement",
        completed: false
      },
      {
        text: "Community Growth and Engagement",
        completed: false
      },
      {
        text: "Partnership Development",
        completed: false
      },
    ],
  },
  {
    phase: "Phase 4: Ecosystem Expansion",
    icon: "🏗️",
    timeline: "Q2-Q3 2024",
    status: "Upcoming",
    milestones: [
      {
        text: "Community Challenges & Rewards Program",
        completed: false
      },
      {
        text: "NFT Collection Development",
        completed: false
      },
      {
        text: "Community Tools Development",
        completed: false
      },
      {
        text: "Strategic Partnerships",
        completed: false
      },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "text-green-400";
    case "in progress":
      return "text-yellow-400";
    case "upcoming":
    case "planned":
      return "text-blue-400";
    default:
      return "text-gray-400";
  }
};

export default Roadmap; 