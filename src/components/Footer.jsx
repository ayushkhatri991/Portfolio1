import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative border-t border-dark-border bg-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="gradient-text">Ayush Khatri</span>
            </h3>
            <p className="text-gray-text text-sm leading-relaxed max-w-xs">
              Java Full Stack Developer specializing in Spring Boot, Spring Security, Microservices, and React.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white-soft mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'Skills', 'Projects', 'Social'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-text text-sm hover:text-purple-light transition-colors duration-200 w-fit"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white-soft mb-4">Get In Touch</h4>
            <p className="text-gray-text text-sm mb-4 leading-relaxed">
              Have a project in mind? Let's create something amazing together.
            </p>
            <motion.a
              href="mailto:khatriayush622@gmail.com"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-purple-light text-sm font-medium hover:text-purple transition-colors"
            >
              Say Hello <FaArrowRight className="text-xs" />
            </motion.a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-text text-xs">
            © {new Date().getFullYear()} Ayush Khatri. All rights reserved.
          </p>
          <p className="text-gray-text text-xs">
            Built with <span className="text-pink">♥</span> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
