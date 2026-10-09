import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/ayush-khatri-863aa8440/',
    handle: 'Ayush Khatri',
    description: 'Connect with me professionally and see my tech background.',
    color: 'from-blue-600 to-blue-800',
    hoverBg: 'hover:border-blue-500/40',
    iconColor: 'text-blue-400',
    stats: 'Professional Profile',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/ayushkhatri991',
    handle: '@ayushkhatri991',
    description: 'Check out my Java, Spring Boot, Microservices, and React projects.',
    color: 'from-gray-700 to-gray-900',
    hoverBg: 'hover:border-gray-500/40',
    iconColor: 'text-gray-300',
    stats: 'Repositories',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: 'https://www.facebook.com/ayush.khatri.9843',
    handle: 'Ayush Khatri',
    description: 'Connect with me on Facebook.',
    color: 'from-blue-700 to-blue-900',
    hoverBg: 'hover:border-blue-600/40',
    iconColor: 'text-blue-500',
    stats: 'Social Profile',
  },
];

const Social = () => {
  return (
    <PageTransition>
      <section className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-8 overflow-hidden">
        {/* Background orbs */}
        <div className="bg-orb w-80 h-80 bg-pink top-20 -left-40" style={{ animationDelay: '0s' }} />
        <div className="bg-orb w-96 h-96 bg-purple bottom-10 -right-48" style={{ animationDelay: '6s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            label="Let's Connect"
            title="Social & Contact"
            description="I'd love to hear from you! Reach out through any of these platforms."
          />

          {/* Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`social-card glass-card p-7 group cursor-pointer ${social.hoverBg}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="w-9 h-9 rounded-xl bg-dark-hover border border-dark-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <FaArrowRight className="text-xs text-gray-text" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-white-soft mb-1 group-hover:text-purple-light transition-colors duration-300">
                    {social.name}
                  </h3>
                  <p className="text-purple-light/70 text-sm font-medium mb-3">{social.handle}</p>
                  <p className="text-gray-text text-sm leading-relaxed mb-4">{social.description}</p>
                  
                  <span className="inline-block tag-pill text-[11px]">{social.stats}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-10 md:p-14 text-center relative overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple to-transparent" />
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple/20 to-pink/10 flex items-center justify-center mx-auto mb-6"
            >
              <FaEnvelope className="text-3xl text-purple-light" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-white-soft mb-3">
              Have a project in mind?
            </h3>
            <p className="text-gray-text text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.a
                href="mailto:khatriayush622@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25 hover:shadow-purple/40 transition-shadow duration-300 flex items-center gap-2"
              >
                <FaEnvelope /> Send an Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ayush-khatri-863aa8440/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl font-semibold border border-dark-border text-white-soft hover:border-purple/40 hover:bg-purple/5 transition-all duration-300 flex items-center gap-2"
              >
                <FaLinkedin /> Connect on LinkedIn
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-text text-sm">
              <FaMapMarkerAlt className="text-purple-light" />
              <span>Nepal • Open to Remote</span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Social;
