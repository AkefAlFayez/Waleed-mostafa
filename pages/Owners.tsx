import React, { useState } from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Smile, TrendingUp } from 'lucide-react';

const FAQ: React.FC<{question: string, answer: string}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-800">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Owners: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Owner Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Maximize your rental income while minimizing your stress.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Benefits of Working With Westside</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-6 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-brand-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Experience Matters</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We have a dedicated team of experienced, professional property managers who are committed to making your investment property as successful as possible. You can relax knowing your investment is in extremely capable hands!
                  </p>
                </div>
              </div>

              <div className="flex">
                 <div className="mr-6 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-brand-primary">
                    <Smile className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Minimize Stress</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Owning a rental property doesn’t have to take up the majority of your time and energy. When you partner with Westside Property Management, we take on the day to day responsibilities, so you can relax!
                  </p>
                </div>
              </div>

              <div className="flex">
                 <div className="mr-6 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-brand-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Maximize Return</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our goal is to make your investment property as profitable as possible. We have tried and tested strategies to make sure you are receiving the highest return possible on your investment.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-slate-50 p-8 rounded-xl shadow-md border border-slate-100 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Rental Price Analysis</h3>
            <p className="text-slate-600 mb-6">Find out how much your property should earn in today's market.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Property Address</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="123 Main St, Santa Monica" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none bg-white">
                    <option>1</option><option>2</option><option>3</option><option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bathrooms</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-md outline-none bg-white">
                    <option>1</option><option>1.5</option><option>2+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-primary outline-none" placeholder="you@example.com" />
              </div>
              <Button fullWidth variant="accent">Get My Estimate</Button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Owner FAQ</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <FAQ 
              question="Are you licensed?" 
              answer="Yes, Westside Property Management Inc. is a fully licensed California Real Estate Corporation (DRE# 01933459). We strictly adhere to all state and local regulations governing property management." 
            />
            <FAQ 
              question="How long will it take to start?" 
              answer="We can start almost immediately. Once the management agreement is signed, we can begin the onboarding process, which includes gathering property information, setting up accounts, and introducing ourselves to existing tenants." 
            />
             <FAQ 
              question="Do you offer real estate services?" 
              answer="Yes! We can assist with buying and selling investment properties. Many of our clients transition from management to sales or vice versa, and we love helping you build your portfolio." 
            />
             <FAQ 
              question="How much will my property rent for?" 
              answer="We perform a detailed comparative market analysis (CMA) using current market data and our local expertise to determine the optimal rental price that minimizes vacancy while maximizing income." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};