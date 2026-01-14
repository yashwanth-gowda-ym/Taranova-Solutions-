import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Cpu, Brain, Layers, Code, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Custom web applications built with modern frameworks and cloud technologies for scalability and performance.',
    features: ['React & Next.js', 'Node.js & Express', 'REST & GraphQL APIs', 'Cloud Deployment'],
    // Background images kept from previous step
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Cpu,
    title: 'AI Agents Development',
    description: 'Intelligent autonomous agents powered by advanced machine learning and natural language processing.',
    features: ['Custom AI Models', 'NLP Integration', 'Automation Workflows', 'Smart Assistants'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Brain,
    title: 'AI-Driven Applications',
    description: 'Integrating artificial intelligence capabilities into business applications for enhanced automation.',
    features: ['Predictive Analytics', 'Computer Vision', 'Recommendation Systems', 'Data Processing'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to address specific business challenges.',
    features: ['Enterprise Software', 'CRM Development', 'ERP Solutions', 'Integration Services'],
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure and deployment services.',
    features: ['AWS & Azure', 'Serverless Architecture', 'DevOps & CI/CD', 'Containerization'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Monitoring'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
];

const ServicesPage = () => {
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
      {/* Hero Section - Reverted to Original */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive technology solutions tailored to your business needs. 
              From web and mobile development to cutting-edge AI solutions, we help 
              you navigate the digital landscape with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Reverted sizes, added background images */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 overflow-hidden"
              >
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* White Overlay for Contrast (Original feel maintained) */}
                <div className="absolute inset-0 bg-white/95 z-10 group-hover:bg-white/90 transition-colors duration-300" />

                {/* Content Layer - Reverted to Original Layout Structure */}
                <div className="relative z-20 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-110">
                      <service.icon className="w-7 h-7 text-slate-700 group-hover:text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Reverted to Original sizes */}
      <section className="section-spacing bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements in depth.' },
              { step: '02', title: 'Design', description: 'Creating detailed blueprints and prototypes for approval.' },
              { step: '03', title: 'Development', description: 'Building your solution with agile methodology and regular updates.' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support to ensure success.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-slate-800 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-800 -translate-x-1/2" style={{ width: 'calc(100% + 2rem)' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reverted to Original */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Let's discuss how we can help bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-lg"
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

export default ServicesPage;