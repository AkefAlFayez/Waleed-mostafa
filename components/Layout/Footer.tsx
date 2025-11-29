import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xl font-serif font-bold">Westside Property Mgmt.</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Reliable income, low expenses, and peace of mind. We protect your investment while ensuring tenant satisfaction across Los Angeles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="hover:text-brand-accent transition-colors">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-accent transition-colors">Management Services</NavLink></li>
              <li><NavLink to="/owners" className="hover:text-brand-accent transition-colors">For Owners</NavLink></li>
              <li><NavLink to="/tenants" className="hover:text-brand-accent transition-colors">For Residents</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-accent transition-colors">Contact</NavLink></li>
              <li><NavLink to="/owners" className="hover:text-brand-accent transition-colors">Request Quote</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>2116 Wilshire Blvd Ste 250<br />Santa Monica, CA 90403</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="tel:+13103108063" className="hover:text-white transition-colors">(310) 310-8063</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:info@wpmla.com" className="hover:text-white transition-colors">info@wpmla.com</a>
              </li>
            </ul>
          </div>

           {/* Areas Served - Abbreviated */}
           <div>
            <h3 className="text-white font-semibold text-lg mb-4">Areas Served</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Santa Monica, Pacific Palisades, Malibu, Brentwood, Venice, Mar Vista, Culver City, Marina del Rey, Westwood, Beverly Hills, West Hollywood, and more.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Westside Property Management Inc. | CA DRE# 01933459</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};