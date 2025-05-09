import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { 
  FaUser, 
  FaTools, 
  FaGraduationCap, 
  FaEnvelope, 
  FaFolder,
  FaBars,  // Hamburger icon
  FaTimes, // Close icon
} from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // New: controls drawer

  const sections = [
    { id: 'about', icon: <FaUser />, label: 'ABOUT' },
    { id: 'skills', icon: <FaTools />, label: 'SKILLS' },
    { id: 'projects', icon: <FaFolder />, label: 'PROJECTS' },
    { id: 'education', icon: <FaGraduationCap />, label: 'EDUCATION' },
    { id: 'contact', icon: <FaEnvelope />, label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      if (isMobile) setDrawerOpen(false); // Close drawer after clicking on mobile
    }
  };

  return (
    <>
      {isMobile ? (
        <div className="fixed top-4 left-4 z-50">
          {!drawerOpen && (
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-3xl text-gray-800 dark:text-gray-200"
            aria-label="Toggle Menu"
          >
            {drawerOpen ? <FaTimes /> : <FaBars />}
          </button>
          )}
          <AnimatePresence>
            {drawerOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col p-6 z-40"
              >
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-3xl text-gray-800 dark:text-gray-200 self-end"
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>
                <ul className="flex flex-col gap-6 mt-12">
                  {sections.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-4 text-lg w-full text-left transition-all ${
                          activeSection === item.id 
                            ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                            : 'text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300'
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
          <motion.ul 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sections.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all relative ${
                    activeSection === item.id 
                      ? 'bg-indigo-600 text-white dark:bg-indigo-700' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  aria-label={item.label}
                >
                  <span className="text-lg">{item.icon}</span>
                  <motion.span 
                    className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: activeSection === item.id ? 1 : 0,
                      x: activeSection === item.id ? 0 : -10
                    }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {item.label}
                  </motion.span>
                </button>
              </li>
            ))}
          </motion.ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
