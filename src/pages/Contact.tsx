import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have something to say? Drop us a message below and we'll get back to you through our community channels!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-blue rounded-lg shadow-xl p-8"
          >
            <h2 className="text-3xl font-military font-bold text-gold mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-ripple-blue border border-gray-600 rounded-lg focus:outline-none focus:border-gold text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-ripple-blue border border-gray-600 rounded-lg focus:outline-none focus:border-gold text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-ripple-blue border border-gray-600 rounded-lg focus:outline-none focus:border-gold text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-ripple-blue border border-gray-600 rounded-lg focus:outline-none focus:border-gold text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full font-military font-bold py-3 rounded-lg transition-colors ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-gold text-navy-blue hover:bg-yellow-400'
                }`}
              >
                {submitStatus === 'success'
                  ? '✓ Message Sent!'
                  : submitStatus === 'error'
                  ? '× Error Sending'
                  : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-navy-blue rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-military font-bold text-gold mb-8">
                Naval Communications 📡
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-gold">🚀</div>
                  <div>
                    <h3 className="text-white font-military font-bold">
                      Mission Control
                    </h3>
                    <p className="text-gray-300">
                      Join the fleet that's making waves in the XRP ecosystem!
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-gold">⚓</div>
                  <div>
                    <h3 className="text-white font-military font-bold">
                      Port of Call
                    </h3>
                    <p className="text-gray-300">
                      Where diamond hands meet naval excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-gold">🌊</div>
                  <div>
                    <h3 className="text-white font-military font-bold">
                      Wave Makers
                    </h3>
                    <p className="text-gray-300">
                      Making ripples in the crypto ocean since day one!
                    </p>
                  </div>
                </div>
                <div className="bg-ripple-blue/30 p-4 rounded-lg border border-gold/20 mt-8">
                  <p className="text-gold font-military text-center italic">
                    "In the navy, we don't HODL the line... <br/>
                    We SAIL beyond it! 🚢"
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-navy-blue rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-military font-bold text-gold mb-8">
                Connect With Us
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-gold transition-colors p-4 rounded-lg bg-ripple-blue"
                  >
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-military">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const socialMedia = [
  {
    icon: "🐦",
    name: "Twitter",
    url: "https://x.com/XRPNAVY",
  },
  {
    icon: "📱",
    name: "Telegram",
    url: "https://t.me/XRPNAVY",
  },
  {
    icon: "🔗",
    name: "Linktree",
    url: "https://linktr.ee/XRPNAVY",
  },
];

export default Contact; 