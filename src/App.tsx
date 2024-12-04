import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-ripple-blue flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
