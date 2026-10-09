import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../assets/assets';

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [filter, setFilter] = useState('All');

  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-8 overflow-hidden">
        {/* Background orbs */}
        <div className="bg-orb w-96 h-96 bg-pink top-10 -right-48" style={{ animationDelay: '0s' }} />
        <div className="bg-orb w-72 h-72 bg-blue bottom-20 -left-36" style={{ animationDelay: '7s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            label="My Work"
            title="Featured Projects"
            description="A selection of projects that showcase my skills and passion for building great software."
          />

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {allTech.slice(0, 8).map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/20'
                    : 'bg-dark-card border border-dark-border text-gray-text hover:border-purple/30 hover:text-white-soft'
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card overflow-hidden group"
                >
                  {/* Image */}
                  <div className="project-image-wrapper aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6 gap-3">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 rounded-lg bg-purple text-white text-xs font-semibold flex items-center gap-2 shadow-lg"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border text-white-soft text-xs font-semibold flex items-center gap-2"
                      >
                        <FaGithub /> Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white-soft mb-2 group-hover:text-purple-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Icons & Tags */}
                    <div className="flex items-center gap-3 mb-3">
                      {project.icons.map((Icon, i) => (
                        <Icon key={i} className="text-purple-light/60 text-sm" />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-dark-hover text-gray-text font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-text text-lg">No projects found with this filter.</p>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 text-purple-light hover:text-purple transition-colors font-medium"
              >
                Show all projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
