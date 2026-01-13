import { motion } from 'framer-motion';
import { FaGlobe, FaMobileAlt, FaRobot, FaBrain } from 'react-icons/fa';

const services = [
  {
    icon: FaGlobe,
    title: 'Web Application Development',
    description: 'Building scalable, responsive, and high-performance web applications using modern frameworks and cloud technologies.',
    color: 'from-blue-500 to-blue-600',
    delay: 0.1,
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Application Development',
    description: 'Creating intuitive iOS and Android applications with seamless user experiences and native performance.',
    color: 'from-purple-500 to-purple-600',
    delay: 0.2,
  },
  {
    icon: FaRobot,
    title: 'AI Agents Development',
    description: 'Developing intelligent autonomous agents powered by advanced machine learning models and natural language processing.',
    color: 'from-cyan-500 to-cyan-600',
    delay: 0.3,
  },
  {
    icon: FaBrain,
    title: 'AI-Driven Applications',
    description: 'Integrating artificial intelligence capabilities into business applications for enhanced automation and insights.',
    color: 'from-emerald-500 to-emerald-600',
    delay: 0.4,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="section-py bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-cyan-50 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-900 mb-6">
            Comprehensive Technology <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We deliver end-to-end technology services tailored to your business needs, 
            leveraging the latest innovations in software development and artificial intelligence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ delay: service.delay }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon Container */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <service.icon className="text-white text-2xl" />
              </motion.div>

              {/* Glow Effect */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

              {/* Content */}
              <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-dark-600 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow Indicator */}
              <motion.div
                className="absolute bottom-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>

              {/* Border Gradient on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-dark-600 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
          >
            <span>Discuss Your Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
