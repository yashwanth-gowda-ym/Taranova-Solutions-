import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobile, FaBrain, FaRobot } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-10% hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary-600">
          <FaCode size={20} />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-15% hidden lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-cyan-500">
          <FaBrain size={20} />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-20 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary-600">
          <FaRobot size={18} />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.span
            className="inline-block px-5 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8"
            whileHover={{ scale: 1.05 }}
          >
            🚀 Transforming Ideas into Digital Reality
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-dark-900 leading-tight mb-6"
        >
          Building the Future with{' '}
          <span className="gradient-text">Innovation</span> &{' '}
          <span className="gradient-text">Excellence</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Empowering businesses to thrive in the digital age through cutting-edge software solutions. 
          From web and mobile apps to AI-driven innovations, our expert team transforms complex visions into digital reality.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg"
          >
            <span>Start Your Project</span>
            <FaArrowRight />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('#services')}
            whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-dark-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-dark-200 flex items-center space-x-2"
          >
            <span>Explore Services</span>
            <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Happy Clients' },
            { number: '15+', label: 'Team Members' },
            { number: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-dark-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-12 border-2 border-dark-300 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-2 h-3 bg-primary-600 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
