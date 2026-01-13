import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Rapid development cycles with agile methodology to bring your ideas to market quickly.',
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security protocols to protect your data and user information.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Future-proof systems designed to grow seamlessly with your business.',
    },
  ];

  const services = [
    {
      icon: 'globe',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and cloud technologies.',
      path: '/services',
    },
    {
      icon: 'smartphone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      path: '/services',
    },
    {
      icon: 'cpu',
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning solutions for business transformation.',
      path: '/services',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Animated Gradient Orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 mb-8 shadow-sm">
                <Star className="w-4 h-4 text-amber-500 mr-2" />
                Transforming Ideas into Digital Reality
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 text-balance"
            >
              Building the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Innovation
              </span>{' '}
              & Excellence
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Empowering businesses to thrive in the digital age through cutting-edge 
              software solutions. From web and mobile apps to AI-driven innovations, 
              our expert team transforms complex visions into digital reality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="flex items-center space-x-2 px-8 py-4 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
            <motion.div className="w-1.5 h-3 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Features Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Taranova?
            </h2>
            <p className="text-slate-600">
              We deliver enterprise-grade solutions that drive real business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-slate-600">
                Comprehensive technology solutions tailored to your business needs.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 flex items-center space-x-2 text-slate-900 font-medium hover:text-blue-600 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {service.icon === 'globe' && (
                    <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {service.icon === 'smartphone' && (
                    <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {service.icon === 'cpu' && (
                    <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-slate-900 font-medium hover:text-blue-600 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
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
              Have a Project in Mind? Let's Build It Together
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Ready to transform your ideas into reality? Our team is here to help you 
              build innovative solutions that drive business growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-900 font-medium rounded-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
