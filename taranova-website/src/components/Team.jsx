import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const team = [
  {
    name: 'Dr. Rahul Sharma',
    role: 'Chief Executive Officer',
    expertise: 'Strategic Leadership & Business Development',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Priya Patel',
    role: 'Chief Technology Officer',
    expertise: 'AI/ML Architecture & Cloud Infrastructure',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Amit Kumar',
    role: 'VP of Engineering',
    expertise: 'Full-Stack Development & Team Leadership',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Sneha Reddy',
    role: 'Head of Product',
    expertise: 'Product Strategy & User Experience Design',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Vikram Singh',
    role: 'Lead AI Engineer',
    expertise: 'Machine Learning & Neural Networks',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Ananya Gupta',
    role: 'Senior UX Designer',
    expertise: 'Interface Design & User Research',
    color: 'from-pink-500 to-rose-600',
  },
];

const Team = () => {
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
    <section id="team" className="section-py bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-50 to-cyan-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-purple-50 to-pink-50 rounded-full blur-3xl opacity-50" />
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
            Our Team
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-900 mb-6">
            Meet Our <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            A diverse team of passionate technologists, innovators, and problem-solvers 
            committed to delivering excellence in every project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image Placeholder */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-dark-900 mb-1 text-center">
                  {member.name}
                </h3>
                
                <motion.span
                  className={`inline-block px-4 py-1 bg-gradient-to-r ${member.color} rounded-full text-white text-sm font-medium mb-3`}
                  whileHover={{ scale: 1.05 }}
                >
                  {member.role}
                </motion.span>
                
                <p className="text-dark-500 text-center text-sm mb-6">
                  {member.expertise}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {[
                    { icon: FaLinkedin, color: 'hover:text-blue-600' },
                    { icon: FaTwitter, color: 'hover:text-sky-500' },
                    { icon: FaGithub, color: 'hover:text-dark-900' },
                    { icon: FaEnvelope, color: 'hover:text-primary-600' },
                  ].map((social, socialIndex) => (
                    <motion.a
                      key={socialIndex}
                      href="#"
                      whileHover={{ scale: 1.2, y: -3 }}
                      className={`text-dark-400 ${social.color} transition-colors duration-200`}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion 
                for innovation and technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-dark-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                View Open Positions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
