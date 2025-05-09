import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const AnimatedSection = ({ id, children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,
  });

  return (
    <section id={id} ref={ref} className={`min-h-screen flex items-center justify-center ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl w-full px-4 py-20"
      >
        {typeof children === 'function' ? children(itemVariants) : children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;