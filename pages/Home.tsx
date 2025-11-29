import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Counter } from '../components/Home/Counter';
import { TestimonialCarousel } from '../components/Home/TestimonialCarousel';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const frustrations = [
    "Vacancy sitting too long and losing money",
    "Tenants who don't pay on time or follow the lease",
    "Maintenance headaches that keep coming back",
    "Constant compliance changes in Los Angeles",
    "Poor communication from their current manager",
    "Feeling overwhelmed managing everything alone"
  ];

  const stats = [
    { label: "Units Managed", value: 2000, suffix: "+" },
    { label: "Years Experience", value: 20, suffix: "+" },
    { label: "Occupancy Rate", value: 98, suffix: "%" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/losangeles2/1920/1080" 
            alt="Los Angeles Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Stress-free <span className="text-brand-accent">Los Angeles</span><br/> 
              Property Management
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl font-light">
              We handle the headaches so you can enjoy the passive income. Professional management for single-family, multi-family, and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg" 
                onClick={() => navigate('/owners')}
                className="shadow-lg shadow-amber-900/20"
              >
                Get a Free Rental Analysis
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/tenants')}
                className="border-white text-white hover:bg-white hover:text-brand-dark"
              >
                Find a Rental
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto max-w-7xl rounded-xl border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="text-3xl md:text-5xl font-bold text-brand-primary mb-2">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Frustrations / Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">How Can Westside Property Management Help You?</h2>
               <p className="text-slate-600 text-lg mb-8">
                 Most landlords come to us because they’re dealing with one or more of these frustrations:
               </p>
               <div className="space-y-4">
                 {frustrations.map((item, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100"
                   >
                     <AlertCircle className="w-6 h-6 text-brand-accent shrink-0 mr-3 mt-0.5" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </motion.div>
                 ))}
               </div>
               <p className="mt-8 text-slate-600">
                 That’s exactly what we help you solve. We take over the leasing, maintenance coordination, accounting, and tenant communication — so your rental stops feeling like a second job.
               </p>
               <div className="mt-8">
                <Button variant="primary" onClick={() => navigate('/services')}>Learn More About Our Services</Button>
               </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-primary/5 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://picsum.photos/seed/keys/800/1000" 
                  alt="Handing over keys" 
                  className="relative rounded-xl shadow-xl w-full object-cover h-[600px]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Properties We Manage</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Whether you own a condo, single-family home, 1-4 unit, 5-15 unit, or a commercial building - we’ve got you covered.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Single-Family",
                desc: "We are experts in the management of single family homes across Los Angeles. Single family homes are single dwellings with no shared walls.",
                img: "https://picsum.photos/seed/house1/400/300"
              },
              {
                title: "Multi-Family",
                desc: "We specialize in managing multi-family properties that combine multiple dwellings, handling common area maintenance and tenant relations.",
                img: "https://picsum.photos/seed/apt1/400/300"
              },
              {
                title: "Condos & Townhomes",
                desc: "We provide management for condominium style properties. Condos and Townhomes are individually owned units within a larger building.",
                img: "https://picsum.photos/seed/condo/400/300"
              },
              {
                title: "Commercial",
                desc: "Extensive experience in managing Los Angeles commercial properties, including retail and office spaces.",
                img: "https://picsum.photos/seed/office/400/300"
              }
            ].map((type, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-xl h-80">
                  <img src={type.img} alt={type.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{type.title}</h3>
                    <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {type.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Real Words From Real Clients</h2>
            <div className="flex items-center justify-center space-x-2 text-brand-accent mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to maximize your return?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Our goal is to make your investment property as profitable as possible so you can enjoy the income. Get a free quote today.
            </p>
            <Button variant="accent" size="lg" onClick={() => navigate('/contact')}>
              Request Free Quote
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};