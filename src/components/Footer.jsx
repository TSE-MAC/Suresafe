import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="fade-in">
            <h3 className="text-3xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-6">SureSafe</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Protecting lives and property with trusted fire safety solutions since 2014.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 glass rounded-xl hover:border-red-500/60 hover:bg-red-500/10 transition-all border border-gray-600 hover-lift group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="group-hover:text-red-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 glass rounded-xl hover:border-blue-500/60 hover:bg-blue-500/10 transition-all border border-gray-600 hover-lift group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-3 glass rounded-xl hover:border-sky-500/60 hover:bg-sky-500/10 transition-all border border-gray-600 hover-lift group"
                aria-label="Twitter"
              >
                <Twitter size={20} className="group-hover:text-sky-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-black text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Products', id: 'products' },
                { label: 'Services', id: 'services' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-red-400 transition-all duration-300 font-medium group flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-black text-lg mb-8">Services</h4>
            <ul className="space-y-4">
              {[
                'Equipment Supply',
                'Installation',
                'Inspection',
                'AMC',
                'Consultation',
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-black text-lg mb-8">Contact</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <Phone size={20} className="text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Phone</p>
                  <p className="text-white font-bold text-sm">+91-XXXXXXXXXX</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <Mail size={20} className="text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Email</p>
                  <p className="text-white font-bold text-sm">info@suresafe.com</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <MapPin size={20} className="text-red-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Address</p>
                  <p className="text-white font-bold text-sm">Your City, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50"></div>

        {/* Bottom Footer */}
        <div className="py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            &copy; {currentYear} SureSafe Fire Safety Solutions. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 btn-gradient text-white rounded-full shadow-2xl transition-all duration-300 z-40 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 z-40 hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6 group-hover:rotate-12 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.557.821-2.816 2.088-3.646 3.496C2.324 11.988 2 13.468 2 15.039c0 1.119.292 2.23.824 3.21.486.921 1.004 1.644 1.7 2.31l-.343.468A.75.75 0 002.5 22h3.756l.007-1.481c.313.046.626.069.938.069 1.571 0 3.083-.327 4.518-.975 1.35-.595 2.559-1.482 3.52-2.639.96-1.157 1.688-2.565 2.062-4.09.385-1.627.385-3.314 0-4.941-.375-1.525-1.102-2.933-2.062-4.09-.961-1.157-2.17-2.044-3.52-2.639a9.87 9.87 0 00-4.518-.975" />
        </svg>
      </a>
    </footer>
  );
}
