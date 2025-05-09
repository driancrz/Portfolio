import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 z-50 shadow-lg"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div key={darkMode ? 'sun' : 'moon'} initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
      {darkMode ? <FaSun /> : <FaMoon />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;