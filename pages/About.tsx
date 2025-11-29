import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            About Westside
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional, dependable, and personable. We put YOU first.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://picsum.photos/seed/teamwork/800/600" 
                alt="Our Team" 
                className="rounded-xl shadow-xl"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Westside Property Management Inc. was founded in 2012, but our Founder and CEO has Real Estate and Property Management roots going back over a decade earlier.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Our talented team takes pride in managing close to 2,000 units for clients from all walks of life. We have shown countless clients the way to financial success and peace of mind—and we can do it for you too!
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Westside Way</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We set ourselves apart from the competition by developing great relationships with our clients. We pride ourselves on being professional, dependable, and personable.
              </p>
              <ul className="space-y-3">
                {[
                  "Three generations of local expertise",
                  "Tailored services to your property goals",
                  "Genuine, friendly, and responsive team"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-brand-accent/20 text-brand-accent p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Our Journey</h2>
          </AnimatedSection>
          
          <div className="relative border-l-2 border-brand-primary/20 ml-4 md:mx-auto md:w-2/3 space-y-12 pl-8 md:pl-0">
            {[
              { year: 'Early 2000s', title: 'Roots', desc: 'Founder begins Real Estate and Property Management career.' },
              { year: '2012', title: 'Foundation', desc: 'Westside Property Management Inc. is officially founded.' },
              { year: '2018', title: 'Expansion', desc: 'Expanded portfolio to cover wider Los Angeles area including Santa Monica and Culver City.' },
              { year: '2025', title: 'Today', desc: 'Managing close to 2,000 units with a dedicated team of professionals.' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="relative md:flex md:items-center md:justify-between">
                {/* Dot */}
                <div className="absolute -left-[41px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-brand-primary border-4 border-slate-50 shadow-sm" />
                
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                  <span className="text-brand-accent font-bold text-xl block mb-1">{item.year}</span>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};