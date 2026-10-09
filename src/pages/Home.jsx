import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { assets, aboutInfo } from '../assets/assets';

const roles = ['Java Full Stack Developer', 'Spring Boot Specialist', 'Spring Security & Microservices', 'React Frontend Developer'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const currentText = roles[roleIndex].substring(0, charIndex);

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden">
        {/* Background Orbs */}
        <div className="bg-orb w-96 h-96 bg-purple top-10 -left-48" style={{ animationDelay: '0s' }} />
        <div className="bg-orb w-80 h-80 bg-pink bottom-20 -right-40" style={{ animationDelay: '5s' }} />
        <div className="bg-orb w-64 h-64 bg-blue top-1/2 left-1/2 -translate-x-1/2" style={{ animationDelay: '10s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple/10 text-purple-light border border-purple/20 mb-6">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Ayush</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="h-10 md:h-12 mb-6"
              >
                <span className="text-xl md:text-2xl font-medium text-gray-text">
                  {currentText}
                </span>
                <span className="text-purple cursor-blink text-xl md:text-2xl font-light">|</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-gray-text text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              >
                I build robust, enterprise-grade backend services with Java, Spring Boot, Spring Security, 
                and Microservices, paired with modern, responsive React interfaces. Dedicated to clean 
                architecture and performant APIs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <NavLink to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25 hover:shadow-purple/40 transition-shadow duration-300 flex items-center gap-2"
                  >
                    View Projects <FaArrowRight className="text-sm" />
                  </motion.button>
                </NavLink>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-xl font-semibold border border-dark-border text-white-soft hover:border-purple/40 hover:bg-purple/5 transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload className="text-sm" /> Resume
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="flex items-center gap-4"
              >
                <span className="text-gray-text text-xs uppercase tracking-wider">Find me on</span>
                <div className="h-px w-8 bg-dark-border" />
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayush-khatri-863aa8440/', label: 'LinkedIn' },
                  { icon: FaGithub, href: 'https://github.com/ayushkhatri991', label: 'GitHub' },
                  { icon: FaFacebook, href: 'https://www.facebook.com/ayush.khatri.9843', label: 'Facebook' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-gray-text hover:text-purple-light hover:border-purple/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right — Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple via-pink to-blue opacity-20 blur-2xl animate-pulse-glow" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border">
                  <img
                    src={assets.profileImg}
                    alt="Ayush Khatri"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-4 top-8 glass-card px-4 py-2 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-white-soft">Available for work</span>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-4 bottom-12 glass-card px-4 py-2"
                >
                  <span className="text-xs font-medium text-purple-light">Java Full Stack Dev</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Cards */}
      <section className="px-6 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="glass-card p-8 group cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-2xl text-purple-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white-soft mb-2">{item.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;