import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaCog, FaProjectDiagram, FaShareAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const navItems = [
  { path: '/', label: 'Home', icon: FaHome },
  { path: '/skills', label: 'Skills', icon: FaCog },
  { path: '/projects', label: 'Projects', icon: FaProjectDiagram },
  { path: '/social', label: 'Social', icon: FaShareAlt },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark/80 backdrop-blur-xl shadow-lg shadow-purple/5 border-b border-dark-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <motion.img
                src={logoImg}
                alt="AK Logo"
                className="w-9 h-9 rounded-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-lg font-bold tracking-tight">
                <span className="gradient-text">Ayush</span>
                <span className="text-white-soft ml-1">Khatri</span>
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2 rounded-xl group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-purple/10 border border-purple/20 rounded-xl"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`relative flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-purple-light' : 'text-gray-text group-hover:text-white-soft'
                    }`}>
                      <Icon className="text-xs" />
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="mailto:khatriayush622@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25 hover:shadow-purple/40 transition-shadow duration-300"
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-text hover:text-white-soft transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-2xl pt-20 px-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <NavLink
                      to={item.path}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-purple/10 text-purple-light border border-purple/20'
                          : 'text-gray-text hover:bg-dark-hover hover:text-white-soft'
                      }`}
                    >
                      <Icon className={isActive ? 'text-purple' : ''} />
                      {item.label}
                    </NavLink>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-4"
              >
                <a
                  href="mailto:khatriayush622@gmail.com"
                  className="block text-center px-5 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25"
                >
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;