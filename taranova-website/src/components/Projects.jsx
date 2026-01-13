import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Enterprise AI Analytics Platform',
    industry: 'Finance Technology',
    description: 'A comprehensive AI-powered analytics platform for financial institutions to gain real-time insights and predictive analysis.',
    techStack: ['React', 'Python', 'TensorFlow', 'AWS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Healthcare Mobile Application',
    industry: 'Healthcare',
    description: 'A HIPAA-compliant mobile application for patient management, appointment scheduling, and telemedicine consultations.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Smart E-Commerce Platform',
    industry: 'Retail',
    description: 'An AI-driven e-commerce solution with personalized recommendations, inventory management, and advanced analytics.',
    techStack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Manufacturing IoT Dashboard',
    industry: 'Manufacturing',
    description: 'Real-time IoT monitoring dashboard for factory equipment, predictive maintenance alerts, and performance analytics.',
    techStack: ['Vue.js', 'Python', 'InfluxDB', 'Docker'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Legal Document AI Processor',
    industry: 'Legal Technology',
    description: 'AI-powered document analysis and processing system for law firms, featuring contract review and compliance checking.',
    techStack: ['React', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Education Learning Management System',
    industry: 'Education',
    description: 'An interactive LMS platform with AI tutoring, progress tracking, and collaborative learning features for educational institutions.',
    techStack: ['React', 'Django', 'WebRTC', 'AWS'],
    color: 'from-teal-500 to-cyan-500',
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="section-py bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
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
            Our Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects showcasing our expertise 
            across various industries and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-8 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-75" />
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <motion.span
                  className="inline-block px-3 py-1 bg-gray-100 text-dark-600 rounded-full text-xs font-semibold mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.industry}
                </motion.span>
                
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex }}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Card Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-dark-800 transition-colors duration-200 shadow-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
