import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Github, Mail } from 'lucide-react';

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
  {
    name: 'Rajesh Menon',
    role: 'Senior Backend Engineer',
    expertise: 'System Architecture & Database Design',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    name: 'Kavitha Srinivasan',
    role: 'DevOps Engineer',
    expertise: 'Cloud Infrastructure & CI/CD Pipelines',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    name: 'Arun Prakash',
    role: 'Mobile Developer',
    expertise: 'iOS & Android Development',
    color: 'from-amber-500 to-orange-600',
  },
];

const TeamPage = () => {
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Team</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Meet our team of passionate technologists, innovators, and problem-solvers 
              dedicated to delivering excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300"
              >
                {/* Profile */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                  
                  <span className={`inline-block px-4 py-1 bg-gradient-to-r ${member.color} rounded-full text-white text-sm font-medium mb-3`}>
                    {member.role}
                  </span>
                  
                  <p className="text-slate-500 text-sm mb-6">{member.expertise}</p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3">
                    {[
                      { icon: Linkedin, href: '#' },
                      { icon: Twitter, href: '#' },
                      { icon: Github, href: '#' },
                      { icon: Mail, href: '#' },
                    ].map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.href}
                        className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-200"
                      >
                        <social.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', description: 'Pushing boundaries and exploring new possibilities to create breakthrough solutions.' },
              { title: 'Excellence', description: 'Committed to delivering the highest quality in every line of code and every pixel designed.' },
              { title: 'Collaboration', description: 'Working together with clients as partners to achieve shared goals and success.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center p-8 bg-white rounded-2xl border border-slate-200"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-slate-900">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
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
              Want to Join Our Team?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-900 font-medium rounded-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
