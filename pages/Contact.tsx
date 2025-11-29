import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-300">We're here to help you with your property needs.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-brand-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Office Address</h3>
                  <p className="text-slate-600">2116 Wilshire Blvd Ste 250<br/>Santa Monica, CA 90403</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-brand-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Phone</h3>
                  <p className="text-slate-600">Main: (310) 310-8063</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-brand-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                  <p className="text-slate-600">General: info@wpmla.com</p>
                  <p className="text-slate-600">Rent Verification: rent@wpmla.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-brand-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Business Hours</h3>
                  <p className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Sat & Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 bg-slate-200 rounded-xl overflow-hidden relative">
               {/* Map Placeholder - In production use Google Maps Embed API */}
               <img src="https://picsum.photos/seed/map/800/400" alt="Map Location" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                 <span className="bg-white px-4 py-2 rounded shadow text-sm font-semibold">Map View</span>
               </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => {e.preventDefault(); alert("Thanks for contacting us!");}}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none bg-white">
                    <option>Interested in Property Management</option>
                    <option>Looking for a Rental</option>
                    <option>Maintenance Question</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <motion.textarea 
                    whileFocus={{ scale: 1.01 }}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                    required
                  ></motion.textarea>
                </div>

                <Button fullWidth size="lg" className="mt-2">Send Message</Button>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};