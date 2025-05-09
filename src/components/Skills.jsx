import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'Animation', level: 70 },
    // Add more skills as needed
  ];

  return (
    <AnimatedSection id="skills" className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-indigo-300">
          My Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;