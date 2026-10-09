import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaExternalLinkAlt, FaBars, FaTimes, FaArrowRight, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { assets, projects, skills } from './assets/assets';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'socials', label: 'Socials' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/ayush-khatri-863aa8440/' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ayushkhatri991' },
  { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/ayush.khatri.9843' },
];

// Fade in animation wrapper
const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    const mailtoLink = `mailto:khatriayush622@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            Ayush Khatri
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== HERO ==================== */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-name"
              >
                Ayush Khatri
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-title"
              >
                Java Full Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-description"
              >
                I'm a Java Full Stack Developer specializing in building scalable backend services with Java, 
                Spring Boot, Spring Security, and Microservices, paired with modern, responsive frontends in React. 
                Dedicated to writing clean code, architecting resilient APIs, and crafting seamless web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
              >
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="btn-primary">
                  <FaEnvelope /> Contact me
                </a>
                <a href="https://github.com/ayushkhatri991" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FaGithub /> GitHub
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-image-wrapper"
            >
              <img src={assets.profileImg} alt="Ayush Khatri" className="hero-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <div className="container"><div className="section-divider" /></div>
      <section id="projects" className="section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A selection of projects that showcase my skills and passion for building great software.
            </p>
          </FadeIn>

          <div className="projects-grid" style={{ marginTop: '40px' }}>
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <div className="project-card">
                  <div className="project-card-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-card-image" />
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>
                    <div className="project-card-tags">
                      {project.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <div className="project-card-links">
                      {project.code && project.code !== '#' ? (
                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-ghost">
                          <FaGithub /> Code
                        </a>
                      ) : (
                        <span className="btn-sm btn-sm-ghost" style={{ opacity: 0.4, cursor: 'not-allowed' }} title="GitHub link unavailable">
                          <FaGithub /> Code
                        </span>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target={project.demo.startsWith('#') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="btn-sm btn-sm-accent"
                          onClick={(e) => {
                            if (project.demo.startsWith('#')) {
                              e.preventDefault();
                              scrollTo(project.demo.substring(1));
                            }
                          }}
                        >
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <div className="container"><div className="section-divider" /></div>
      <section id="skills" className="section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Skills & Tech Stack</h2>
            <p className="section-subtitle">
              Technologies and tools I specialize in as a Java Full Stack Developer.
            </p>
          </FadeIn>

          <div className="skills-grid" style={{ marginTop: '40px' }}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <FadeIn key={index} delay={index * 0.08}>
                  <div className="skill-card">
                    <div className="skill-card-icon">
                      <Icon />
                    </div>
                    <h3 className="skill-card-title">{skill.title}</h3>
                    <p className="skill-card-desc">{skill.description}</p>
                    <div className="skill-tags">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="stats-grid">
              {[
                { value: 'Java', label: 'Core Backend' },
                { value: 'Spring Boot', label: 'Security & Microservices' },
                { value: 'React', label: 'Frontend UI' },
                { value: 'SQL / REST', label: 'Database & APIs' },
              ].map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== SOCIALS ==================== */}
      <div className="container"><div className="section-divider" /></div>
      <section id="socials" className="section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Socials</h2>
            <p className="section-subtitle">
              Let's connect! Reach out through any of these platforms.
            </p>
          </FadeIn>

          <div className="socials-grid" style={{ marginTop: '32px' }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <FadeIn key={social.name} delay={index * 0.06}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Icon /> {social.name}
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <div className="container"><div className="section-divider" /></div>
      <section id="contact" className="section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Contact me
            </p>
          </FadeIn>

          <div className="contact-layout" style={{ marginTop: '40px' }}>
            <div className="contact-info-list">
              <FadeIn delay={0.1}>
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Email</h3>
                    <a href="mailto:khatriayush622@gmail.com" className="contact-card-value">
                      khatriayush622@gmail.com
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Location</h3>
                    <p className="contact-card-value">Nepal</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaPaperPlane />
                  </div>
                  <div>
                    <h3 className="contact-card-title">Direct Contact</h3>
                    <a href="mailto:khatriayush622@gmail.com" className="btn-primary" style={{ marginTop: '8px' }}>
                      <FaEnvelope /> Send Mail Directly
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="contact-form-wrapper">
              <form onSubmit={handleFormSubmit} className="contact-form">
                <h3 className="form-title">Send a Message</h3>
                
                {formSubmitted ? (
                  <div className="form-success-msg">
                    <FaPaperPlane style={{ fontSize: '1.5rem', color: '#818cf8', marginBottom: '8px' }} />
                    <p>Opening your email client... Thank you for contacting me!</p>
                  </div>
                ) : (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Project Discussion / Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Hello Ayush, I would like to discuss..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <FaPaperPlane /> Send Message
                    </button>
                  </>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p className="footer-text">
              © {new Date().getFullYear()} Ayush Khatri. All rights reserved.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="footer-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FaMapMarkerAlt style={{ color: '#818cf8', fontSize: '0.75rem' }} /> Nepal
              </span>
              <a href="mailto:khatriayush622@gmail.com" className="footer-contact">
                khatriayush622@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;