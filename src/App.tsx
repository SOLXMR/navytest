import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ripple-blue text-white">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-navy-blue shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/logo1.png" 
                    alt="XRPNAVY Logo" 
                    className="h-10 w-10 object-contain" 
                  />
                  <span className="ml-3 text-xl font-military font-bold">$XRPNAVY</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/roadmap">Roadmap</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </motion.nav>

        <main>
          <React.Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="rounded-full h-32 w-32 border-t-2 border-b-2 border-xrp-blue"
              />
            </div>
          }>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </React.Suspense>
        </main>

        <footer className="bg-navy-blue mt-auto py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                © 2024 $XRPNAVY. All rights reserved.
              </div>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://x.com/XRPNAVY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Twitter
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://t.me/XRPNAVY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Telegram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linktr.ee/XRPNAVY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Linktree
                </motion.a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-xrp-blue hover:text-white transition-colors"
    >
      {children}
    </Link>
  </motion.div>
);

export default App;
