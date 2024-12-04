import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
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
            Project <span className="text-gold">Roadmap</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-3xl mx-auto break-words">
            Our strategic plan for development and growth, combining military precision
            with blockchain innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold"></div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-20">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-0 md:px-8 mb-8 md:mb-0">
                  <div className="bg-navy-blue p-4 sm:p-6 rounded-lg shadow-xl overflow-hidden">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="text-xl sm:text-2xl text-gold mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                      <h3 className="text-xl sm:text-2xl font-military font-bold text-white break-words">
                        {item.phase}
                      </h3>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-block bg-xrp-blue text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                        {item.timeline}
                      </span>
                    </div>
                    <ul className="text-gray-300 space-y-3 sm:space-y-4">
                      {item.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`mr-2 flex-shrink-0 ${milestone.completed ? 'text-green-400' : 'text-gold'}`}>
                            {milestone.completed ? '✓' : '•'}
                          </span>
                          <div className="min-w-0 break-words">
                            {milestone.link ? (
                              <a
                                href={milestone.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xrp-blue hover:text-gold transition-colors cursor-pointer text-sm sm:text-base"
                              >
                                {milestone.text} →
                              </a>
                            ) : (
                              <p className={`${milestone.completed ? 'text-green-400' : 'text-gray-300'} text-sm sm:text-base`}>
                                {milestone.text}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    {item.status && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                        <span className={`text-xs sm:text-sm ${getStatusColor(item.status)}`}>
                          Status: {item.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Point - Adjusted for mobile */}
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${
                  item.status === 'Completed' ? 'bg-green-400' : 'bg-gold'
                } hidden md:block`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-military font-bold text-gold mb-4 sm:mb-6 break-words">
            Future Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-[90vw] sm:max-w-3xl mx-auto break-words">
            Our roadmap will continue to evolve as we grow our community and develop new opportunities within the XRP ecosystem.
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
    timeline: "Launch Phase",
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
    timeline: "Integration Phase",
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
    timeline: "Growth Phase",
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
    timeline: "Development Phase",
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