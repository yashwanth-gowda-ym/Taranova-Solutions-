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

      {/* CTA Section */}
      <section className="section-spacing bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              We'd love to hear about it. Let's discuss how we can bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-900 font-medium rounded-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg"
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
