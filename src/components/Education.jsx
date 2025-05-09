import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  const educationData = [
    {
      level: "College",
      period: "2021 - 2025",
      institution: "Bulacan State University - Hagonoy Campus",
      description: "Bachelor of Science in Information Technology",
      location: "Iba-Carillo, Hagonoy, Bulacan"
    },
    {
      level: "Senior High School",
      period: "2019 - 2021",
      institution: "Iba National High School (Annex Building)",
      description: "Technical Vocational Livelihood (TVL) - Track (Cookery)",
      location: "Iba, Hagonoy, Bulacan"
    },
    {
      level: "Junior High School",
      period: "2015-2019",
      institution: "Iba National High School",
      description: "",
      location: "Iba, Hagonoy, Bulacan"
    },
    {
      level: "Elementary",
      period: "2009-2015",
      institution: "Iba-Ibayo Elementary School",
      description: "",
      location: "Iba-Ibayo, Hagonoy, Bulacan"
    }
  ];

  return (
    <AnimatedSection id="education" className="bg-indigo-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-indigo-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-800 transform -translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                  {edu.level}
                </h3>
                {edu.period && (
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                )}
                <p className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.description}</p>
                )}
                <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
              </div>
              
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-md z-10">
                <FaGraduationCap className="text-indigo-600 dark:text-indigo-300 text-xl" />
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;