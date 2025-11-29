import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { Search, CreditCard, PenTool } from 'lucide-react';

export const Tenants: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Tenant Resources</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find your next home or manage your current tenancy with ease.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
             <AnimatedSection className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-slate-100">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Available Rentals</h3>
                <p className="text-slate-600 mb-6">Browse our current listings of single-family homes, condos, and apartments in West LA.</p>
                <Button variant="outline">View Listings</Button>
             </AnimatedSection>

             <AnimatedSection delay={0.1} className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-slate-100">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pay Rent Online</h3>
                <p className="text-slate-600 mb-6">Securely pay your rent online, set up autopay, and view your payment history.</p>
                <Button variant="primary">Tenant Portal Login</Button>
             </AnimatedSection>

             <AnimatedSection delay={0.2} className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-slate-100">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Maintenance Request</h3>
                <p className="text-slate-600 mb-6">Submit non-emergency maintenance requests directly to our team through the online portal.</p>
                <Button variant="secondary">Submit Request</Button>
             </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold mb-6">Emergency Maintenance</h2>
            <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
              <p className="text-red-800 font-semibold mb-2">For life-threatening emergencies, dial 911 immediately.</p>
              <p className="text-slate-700 mb-4">
                For property emergencies (flooding, gas leak, no heat in winter) occurring after hours, please call our 24/7 hotline.
              </p>
              <a href="tel:+13105550199" className="text-2xl font-bold text-brand-primary block hover:text-blue-700">
                (310) 555-0199
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};