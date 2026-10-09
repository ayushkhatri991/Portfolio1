import { FaJava, FaServer, FaShieldAlt, FaReact, FaDatabase, FaTools, FaLightbulb, FaCode, FaPaintBrush, FaNodeJs, FaStripe, FaVuejs, FaFire, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg2 from '../assets/project2.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaJava,
      title: 'Java & Spring Specialist',
      description: 'Expertise in building scalable, secure backend systems using Java, Spring Boot, Spring Security, and Microservices.',
      color: 'text-purple'
    },
    {
      icon: FaReact,
      title: 'React Frontend',
      description: 'Crafting responsive, intuitive, and modern web user interfaces using React and JavaScript.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Architecture',
      description: 'Writing maintainable, high-performance code following RESTful API best practices and design patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Java & Backend Core',
    icon: FaJava,
    description: 'Building robust, enterprise-grade backend services with Java and Spring Framework.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Hibernate']
  },
  {
    title: 'Spring Security',
    icon: FaShieldAlt,
    description: 'Implementing secure authentication, authorization, and access control mechanisms.',
    tags: ['Spring Security', 'JWT', 'OAuth2', 'Role-Based Auth', 'API Security']
  },
  {
    title: 'Microservices Architecture',
    icon: FaServer,
    description: 'Architecting distributed, scalable microservices and resilient backend systems.',
    tags: ['Microservices', 'Spring Cloud', 'API Gateway', 'Eureka', 'Event-Driven']
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Developing interactive, responsive, and dynamic single-page applications with React.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Databases & Persistence',
    icon: FaDatabase,
    description: 'Designing relational databases, query optimization, and data persistence strategies.',
    tags: ['MySQL', 'SQL']
  },
  {
    title: 'Tools & DevOps',
    icon: FaTools,
    description: 'Essential build, containerization, version control, and API testing tools.',
    tags: ['Docker', 'Git & GitHub', 'Maven', 'Gradle', 'Postman / Swagger']
  }
];



export const projects = [
  {
    title: "Task Management App",
    description: "Task management application built using the MERN stack (React, Node.js, Express, MongoDB) for creating, tracking, and managing tasks efficiently.",
    image: projectImg2,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://task-dun-eta.vercel.app/",
    code: "https://github.com/ayushkhatri991/Task",
  },
  {
    title: "Employee Management",
    description: "Employee management system built using Java, Spring Boot, Spring Security, Spring Data JPA, and MySQL.",
    image: projectImg4,
    tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL"],
    icons: [FaJava, FaShieldAlt, FaDatabase, FaServer],
    demo: "https://employeemanagement-production-14b1.up.railway.app/",
    code: "https://github.com/ayushkhatri991/employeemanagement",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio website built using React, Vite, CSS, and Framer Motion.",
    image: projectImg5,
    tech: ["React", "Vite", "CSS", "Framer Motion"],
    icons: [FaReact, FaCode],
    demo: "#home",
    code: "#",
  }
];

