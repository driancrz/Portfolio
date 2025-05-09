import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ecoSort from '../assets/ecosort.png';
import kanban from '../assets/kanban.png';
import pips from '../assets/pdo.png';
import pmes from '../assets/pmes-img.jpg';
const Projects = () => {
  const projects = [
    {
      title: "EcoSort: Automatic Waste Segregator",
      description: "AI-powered waste sorting system using computer vision",
      tags: ["React", "TypeScript", "TailwindCSS", "Firebase", "Arduino C++"],
      image: ecoSort,
      demoUrl: "https://ibanhs-yeso.com/",
      codeUrl: "https://github.com/driancrz",
    },
    {
      title: "Pmes Web",
      description: "Web-based form submission system",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      image: pmes,
      demoUrl: "https://ibanhs-yeso.com/",
      codeUrl: "https://github.com/driancrz",
    },
    {
      title: "Bulsu PIPS",
      description: "University project management system tracking ongoing projects, funding requirements, and approval statuses",
      tags: ["React", "CSS", "Material UI"],
      image: pips,
      demoUrl: "https://pdo-bulsupips.web.app/",
      codeUrl: "https://github.com/driancrz",
    },
    {
      title: "PDO KANBAN",
      description: "Task management system with status tracking (Soon, Blocked, Available, In Progress, Done)",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      image: kanban,
      demoUrl: "https://pdokanban.web.app/",
      codeUrl: "https://github.com/driancrz",
    },
  ];

  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef();

  // Double the projects array for seamless looping
  const duplicatedProjects = [...projects, ...projects];

  // Continuous scrolling animation
  useEffect(() => {
    const containerWidth = containerRef.current?.scrollWidth / 2;
    const duration = projects.length * 3; // Adjust speed here
    
    const startAnimation = () => {
      controls.start({
        x: -containerWidth,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (!isHovered) {
      animationRef.current = startAnimation();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [controls, projects.length, isHovered]);

  // Pause on hover
  const handleHover = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    // Animation will restart automatically via the useEffect
  };
  
  return (
    <AnimatedSection id="projects" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 dark:min-h-screen py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-indigo-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <div 
          className="relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          onTouchStart={handleHover}
          onTouchEnd={handleHoverEnd}
        >
          {/* Carousel container */}
          <div className="overflow-hidden">
            <motion.div 
              ref={containerRef}
              className="flex py-4"
              animate={controls}
            >
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="w-[90vw] md:w-[70vw] lg:w-[50vw] mx-4 flex-shrink-0"
                >
                  <div className="h-full bg-gray-50 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all 
                    rounded-b-xl rounded-t-xl overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                    />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                          <FaGithub className="mr-2" /> Code
                        </a>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
                          <FaExternalLinkAlt className="mr-2" /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;