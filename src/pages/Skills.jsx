import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../assets/assets';

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-8 overflow-hidden">
        {/* Background orbs */}
        <div className="bg-orb w-80 h-80 bg-cyan top-20 -right-40" style={{ animationDelay: '0s' }} />
        <div className="bg-orb w-64 h-64 bg-purple bottom-40 -left-32" style={{ animationDelay: '8s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            label="What I Do"
            title="Skills & Tech Stack"
            description="Technologies and tools I specialize in as a Java Full Stack Developer — spanning backend Spring microservices, Spring Security, SQL databases, and modern React frontends."
          />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeCard === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  className="glass-card p-8 group cursor-default relative"
                >
                  {/* Top accent bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-purple via-pink to-blue"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}
                  />

                  <div className="flex items-start gap-5 mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple/20 to-pink/10 flex items-center justify-center flex-shrink-0"
                      animate={{ rotate: isActive ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-2xl text-purple-light" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white-soft mb-1">{skill.title}</h3>
                      <p className="text-gray-text text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                        className="tag-pill"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tech stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 glass-card p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 'Java', label: 'Core Language' },
                { value: 'Spring', label: 'Boot & Security' },
                { value: 'React', label: 'Frontend UI' },
                { value: 'Microservices', label: 'Architecture' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-text text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;
