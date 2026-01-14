import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
      { name: 'Team', path: '/team' },
    ],
    services: [
      { name: 'Web Development', path: '/services' },
      { name: 'Mobile Apps', path: '/services' },
      { name: 'AI Solutions', path: '/services' },
      { name: 'Consulting', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const contactDetails = {
    address: 'No. 199, 6th Cross, Duo, Marvel Layout, Ananthpura, Yelahanka, Bangalore North, Karnataka, India, 560064',
    phone: '+91 8123439031',
    email: 'mail-cr@taranova.solutions',
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/taranova-logo.png"
                alt="Taranova Solutions Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Empowering businesses through cutting-edge software solutions. 
              From web and mobile apps to AI-driven innovation, we transform visions into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{contactDetails.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <a href="mailto:mail-cr@taranova.solutions" className="hover:text-white transition-colors text-sm">
                  mail-cr@taranova.solutions
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <a href="tel:+918123439031" className="hover:text-white transition-colors text-sm">
                  {contactDetails.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-slate-500 text-sm">
            © {currentYear} TARANOVA SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-slate-500 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
