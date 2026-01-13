import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate neural network particles for hero
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

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
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/40">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuitPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Horizontal and vertical lines */}
                <path d="M0 50h60M140 50h60M50 0v60M50 140v60M100 40h40M140 40v20M100 160h40M140 160v-20" 
                      stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1.5" fill="none"/>
                {/* Circuit nodes */}
                <circle cx="50" cy="50" r="4" fill="rgba(6, 182, 212, 0.3)"/>
                <circle cx="150" cy="50" r="4" fill="rgba(6, 182, 212, 0.3)"/>
                <circle cx="50" cy="150" r="4" fill="rgba(6, 182, 212, 0.3)"/>
                <circle cx="150" cy="150" r="4" fill="rgba(6, 182, 212, 0.3)"/>
                <circle cx="100" cy="100" r="5" fill="rgba(6, 182, 212, 0.4)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuitPattern)" />
          </svg>
        </div>

        {/* Enhanced Neural Network with Multiple Layers */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 1)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </radialGradient>
            <radialGradient id="nodeCore">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 1)" />
            </radialGradient>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
              <stop offset="40%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.9)" />
              <stop offset="60%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </linearGradient>
          </defs>
          
          {/* Outer glow for nodes */}
          {particles.map((particle) => (
            <g key={particle.id}>
              <motion.circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r={particle.size * 4}
                fill="url(#nodeGlow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r={particle.size * 1.5}
                fill="url(#nodeCore)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'easeInOut',
                }}
              />
            </g>
          ))}
          
          {/* Connection lines with enhanced flow effect */}
          {particles.slice(0, 15).map((p1, i) => {
            const p2 = particles[(i + 3) % particles.length];
            return (
              <g key={`line-${i}`}>
                {/* Base line */}
                <line
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="1.5"
                />
                {/* Animated glow line */}
                <motion.line
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ 
                    pathLength: [0, 0.7, 0],
                    pathOffset: [0, 0.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Enhanced Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-[130px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/15 to-cyan-300/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-md border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-600 mb-8 shadow-lg shadow-cyan-500/10">
                <Star className="w-4 h-4 text-cyan-500 mr-2 fill-cyan-500" />
                Transforming Ideas into Digital Reality
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 text-balance"
            >
              Building the Future with{' '}
              <span className="relative inline-block">
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600"
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  Innovation
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>{' '}
              & Excellence
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed"
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
                className="group relative flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="flex items-center space-x-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 font-medium rounded-lg border border-slate-300 transition-all duration-300 hover:bg-white hover:border-cyan-500/50 hover:shadow-lg"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Tech Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-600 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span>AI/ML Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span>Cloud Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                <span>Full Stack Development</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Stats Section - Keeping original style but enhancing to match */}
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
                className="text-center group"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                  {stat.number}
                </div>
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
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-cyan-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
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
              className="mt-4 md:mt-0 flex items-center space-x-2 text-slate-900 font-medium hover:text-cyan-600 transition-colors"
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
                className="group bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-cyan-500/30"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all">
                  {service.icon === 'globe' && (
                    <svg className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {service.icon === 'smartphone' && (
                    <svg className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {service.icon === 'cpu' && (
                    <svg className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-slate-900 font-medium hover:text-cyan-600 transition-colors"
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
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
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