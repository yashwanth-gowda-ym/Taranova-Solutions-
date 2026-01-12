import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'No. 199, 6th Cross, Duo, Marvel Layout',
      subtext: 'Ananthpura, Yelahanka, Bangalore - 560064',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'mail-cr@taranova.solutions',
      subtext: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8123439031',
      subtext: 'Mon - Sat: 9:00 AM - 7:00 PM',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 7:00 PM',
      subtext: 'Sat: 10:00 AM - 5:00 PM',
    },
  ];

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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out to us 
              and let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                Let's Start a Conversation
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-700 font-medium">{info.content}</p>
                      <p className="text-slate-500 text-sm">{info.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Company Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-xl p-4">
                  <span className="text-slate-500 text-xs uppercase tracking-wider">CIN</span>
                  <p className="text-slate-900 font-mono text-sm mt-1">U63999KA2025PTC201943</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <span className="text-slate-500 text-xs uppercase tracking-wider">GSTIN</span>
                  <p className="text-slate-900 font-mono text-sm mt-1">29AALCT8364Q1Z4</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-2xl p-6">
                <div className="h-48 bg-slate-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <span className="text-slate-500">Interactive Map</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mt-3 text-center">
                  No. 199, 6th Cross, Duo, Marvel Layout, Ananthpura, Yelahanka, Bangalore - 560064
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                    submitStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { question: 'What is your typical project timeline?', answer: 'Project timelines vary based on complexity. A simple web application typically takes 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.' },
              { question: 'Do you offer ongoing support and maintenance?', answer: 'Yes! We offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally after launch.' },
              { question: 'What industries do you specialize in?', answer: 'We work across various industries including finance, healthcare, retail, manufacturing, education, and legal technology. Our team adapts quickly to domain-specific requirements.' },
              { question: 'How do you ensure project confidentiality?', answer: 'We sign comprehensive NDAs with all clients and follow strict data protection protocols to safeguard your intellectual property and sensitive information.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
