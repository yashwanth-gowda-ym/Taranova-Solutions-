import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { emailjsConfig } from '../config/emailjs';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Default to India
    mobile: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationStep, setValidationStep] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);

  const BACKEND_URL = 'http://localhost:5001';

  // Popular country codes
  const countryCodes = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+27', country: 'S. Africa', flag: '🇿🇦' },
    { code: '+82', country: 'S. Korea', flag: '🇰🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const validateEmail = async (email) => {
    try {
      console.log('Calling email validation API...');
      const response = await fetch(`${BACKEND_URL}/api/validate-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('Email validation response status:', response.status);
      const data = await response.json();
      console.log('Email validation response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Email validation failed');
      }

      return { valid: true, message: data.message };
    } catch (error) {
      console.error('Email validation error:', error);
      throw new Error(error.message || 'Email validation failed. Please try again.');
    }
  };

  const validatePhone = async (phone) => {
    try {
      console.log('Calling phone validation API with:', phone);
      const response = await fetch(`${BACKEND_URL}/api/validate-phone`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      console.log('Phone validation response status:', response.status);
      const data = await response.json();
      console.log('Phone validation response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Phone validation failed');
      }

      return { valid: true, message: data.message };
    } catch (error) {
      console.error('Phone validation error:', error);
      throw new Error(error.message || 'Phone validation failed. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('validating');
    setErrorMessage('');

    if (!captchaToken) {
      setStatus('error');
      setErrorMessage('Please verify CAPTCHA');
      return;
    }

    try {
      // Combine country code and mobile number
      const fullPhoneNumber = `${formData.countryCode}${formData.mobile}`;
      
      // Step 1: Verify CAPTCHA
      setValidationStep('Verifying CAPTCHA...');
      console.log('Step 1: Verifying CAPTCHA');
      const captchaRes = await fetch(`${BACKEND_URL}/api/verify-captcha`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken })
      });
      
      const captchaData = await captchaRes.json();
      
      if (!captchaData.success) {
        throw new Error('Captcha verification failed');
      }
      console.log('✅ CAPTCHA verified successfully');

      // Step 2: Validate Email
      setValidationStep('Verifying email address...');
      console.log('Step 2: Validating email:', formData.email);
      await validateEmail(formData.email);
      console.log('✅ Email validated successfully');

      // Step 3: Validate Phone
      setValidationStep('Verifying phone number...');
      console.log('Step 3: Validating phone:', fullPhoneNumber);
      await validatePhone(fullPhoneNumber);
      console.log('✅ Phone validated successfully');

      // Step 4: If all validations pass, send email via EmailJS
      setStatus('sending');
      setValidationStep('Sending your message...');
      console.log('Step 4: Sending email via EmailJS');

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_mobile: fullPhoneNumber,
        company: formData.company || 'Not specified',
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('✅ Email sent successfully');
      setStatus('success');
      setValidationStep('');
      // Reset form
      setFormData({ name: '', email: '', countryCode: '+91', mobile: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setStatus('error');
      setValidationStep('');
      setErrorMessage(
        error.message || 'Failed to send message. Please check your information and try again.'
      );
    }
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
              Have a project in mind? We&apos;d love to hear about it. Reach out to us 
              and let&apos;s discuss how we can help bring your ideas to life.
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
                Let&apos;s Start a Conversation
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

              {/* Validation Progress */}
              {(status === 'validating' || status === 'sending') && validationStep && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center space-x-3"
                >
                  <Loader2 className="w-5 h-5 text-blue-600 animate-spin flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-800">{validationStep}</p>
                    <p className="text-sm text-blue-600 mt-1">Please wait...</p>
                  </div>
                </motion.div>
              )}

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Message Sent Successfully!</p>
                    <p className="text-sm text-green-600 mt-1">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Validation Failed</p>
                    <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Email */}
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
                      disabled={status === 'validating' || status === 'sending'}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      disabled={status === 'validating' || status === 'sending'}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile with Country Code & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-2">
                      Mobile Number *
                    </label>
                    <div className="flex gap-2 flex-1">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        disabled={status === 'validating' || status === 'sending'}
                        className="w-28 px-3 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        placeholder="9876543210"
                        disabled={status === 'validating' || status === 'sending'}
                        className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Enter number without country code
                    </p>
                  </div>
                  <div className="flex flex-col">
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
                      disabled={status === 'validating' || status === 'sending'}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-1"
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      &nbsp;
                    </p>
                  </div>
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
                    disabled={status === 'validating' || status === 'sending'}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="flex justify-center my-4">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'validating' || status === 'sending'}
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                    status === 'success'
                      ? 'bg-green-500 text-white'
                      : status === 'error'
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'
                  } ${(status === 'validating' || status === 'sending') ? 'cursor-not-allowed opacity-70' : ''}`}
                >
                  {status === 'validating' || status === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 text-white" />
                      <span>{status === 'validating' ? 'Validating...' : 'Sending...'}</span>
                    </>
                  ) : status === 'success' ? (
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