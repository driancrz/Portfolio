import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const About = () => {
  const viewCV = () => {
    window.open('/ResumeCruz.pdf', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection id="about" className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
        {/* Text Content - Right Side */}
        <motion.div 
          className="lg:w-3/5 xl:w-2/3 text-center lg:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-700 dark:text-indigo-300 leading-tight">
            Hello, I'm Adrian
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate web developer specializing in web development. 
            I create digital experiences that are both beautiful and functional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={viewCV} 
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              View CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition shadow-md"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Larger Profile Picture - Left Side */}
        <motion.div 
          className="lg:w-2/5 xl:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-56 h-60 sm:w-64 sm:h-64"> {/* Increased size w-80 h-80 sm:w-96 sm:h-96 */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="profile.png" 
                alt="Adrian's Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional decorative element */}
            <div className="absolute -inset-2 rounded-full border-2 border-indigo-400 dark:border-indigo-600 opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;