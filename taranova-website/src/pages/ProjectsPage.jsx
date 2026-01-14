import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise AI Analytics Platform',
    category: 'Finance Technology',
    description: 'A comprehensive AI-powered analytics platform for financial institutions to gain real-time insights and predictive analysis.',
    techStack: ['React', 'Python', 'TensorFlow', 'AWS'],
    image: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  },
  {
    title: 'Healthcare Mobile Application',
    category: 'Healthcare',
    description: 'A HIPAA-compliant mobile application for patient management, appointment scheduling, and telemedicine consultations.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  },
  {
    title: 'Smart E-Commerce Platform',
    category: 'Retail',
    description: 'An AI-driven e-commerce solution with personalized recommendations, inventory management, and advanced analytics.',
    techStack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'],
    image: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
  },
  {
    title: 'Manufacturing IoT Dashboard',
    category: 'Manufacturing',
    description: 'Real-time IoT monitoring dashboard for factory equipment, predictive maintenance alerts, and performance analytics.',
    techStack: ['Vue.js', 'Python', 'InfluxDB', 'Docker'],
    image: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
  {
    title: 'Legal Document AI Processor',
    category: 'Legal Technology',
    description: 'AI-powered document analysis and processing system for law firms, featuring contract review and compliance checking.',
    techStack: ['React', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    image: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  },
  {
    title: 'Education Learning Management System',
    category: 'Education',
    description: 'An interactive LMS platform with AI tutoring, progress tracking, and collaborative learning features for educational institutions.',
    techStack: ['React', 'Django', 'WebRTC', 'AWS'],
    image: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
  },
];

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore our portfolio of successful projects across various industries. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300"
              >
                {/* Project Image */}
                <div className="h-56 relative overflow-hidden" style={{ background: project.image }}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-white text-slate-900 font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '15+', label: 'Team Members' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant Professional Design */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100">
        {/* Elegant geometric background pattern */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexGrid" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
                <polygon points="40,0 80,23 80,69 40,92 0,69 0,23" fill="none" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.4" />
              </pattern>
              <linearGradient id="elegantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexGrid)" />
            
            {/* Elegant floating shapes */}
            <motion.circle
              cx="15%"
              cy="20%"
              r="40"
              fill="url(#elegantGradient)"
              opacity="0.15"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 180 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            <motion.circle
              cx="85%"
              cy="80%"
              r="60"
              fill="url(#elegantGradient)"
              opacity="0.15"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: -180 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
            />
            
            {/* Subtle connection lines */}
            {[
              { x1: '20%', y1: '15%', x2: '35%', y2: '30%', delay: 0 },
              { x1: '65%', y1: '25%', x2: '80%', y2: '40%', delay: 0.2 },
              { x1: '10%', y1: '70%', x2: '25%', y2: '85%', delay: 0.4 },
              { x1: '75%', y1: '60%', x2: '90%', y2: '75%', delay: 0.6 },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#elegantGradient)"
                strokeWidth="2"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: line.delay, ease: 'easeInOut' }}
              />
            ))}
            
            {/* Gentle floating elements */}
            {[
              { cx: '25%', cy: '45%', r: '3', delay: 0 },
              { cx: '55%', cy: '35%', r: '4', delay: 0.1 },
              { cx: '75%', cy: '55%', r: '3.5', delay: 0.2 },
              { cx: '40%', cy: '70%', r: '2.5', delay: 0.3 },
              { cx: '60%', cy: '85%', r: '3', delay: 0.4 },
            ].map((element, i) => (
              <g key={i}>
                <motion.circle
                  cx={element.cx}
                  cy={element.cy}
                  r={element.r}
                  fill="#06b6d4"
                  opacity="0.8"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: element.delay }}
                />
                <motion.circle
                  cx={element.cx}
                  cy={element.cy}
                  r={element.r + 8}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.8"
                  opacity="0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: element.delay }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Bottom accent bar only */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear about it. Let's discuss how we can bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
