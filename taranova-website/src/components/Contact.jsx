import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Bangalore, Karnataka, India',
      subtext: 'Serving clients globally',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'hello@taranova.solutions',
      subtext: 'We respond within 24 hours',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 98765 43210',
      subtext: 'Mon - Sat: 9:00 AM - 7:00 PM',
    },
  ];

  return (
    <section id="contact" className="section-py bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-50 to-transparent opacity-50" />
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-900 mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out to us 
            and let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200 ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
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
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-dark-700 font-medium">
                      {info.content}
                    </p>
                    <p className="text-dark-500 text-sm mt-1">
                      {info.subtext}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-dark-900 mb-4">
                Business Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-dark-600">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-dark-600">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-dark-400">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl p-6 shadow-lg text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FaMapMarkerAlt className="text-primary-400" />
                <h4 className="text-lg font-semibold">Visit Our Office</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Tech Park, Electronic City, Bangalore - 560100, Karnataka, India
              </p>
              <div className="h-32 bg-dark-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map View</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
