import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tom F.",
    role: "Rental Property Owner",
    text: "When we were looking for a property management company to handle our 10 unit apartment house in West Los Angeles we knew we wanted a local company that would provide full service... Westside Property Management was the perfect fit for us. Throughout the pandemic, all rents were paid on time and the few vacancies were quickly filled.",
    rating: 5
  },
  {
    id: 2,
    name: "Julie A.",
    role: "Rental Property Owner",
    text: "I highly recommend Westside Property Management. It is an exceptional service. The team is efficient, reliable, professional, and personable... Our family’s tenants have always felt supported and appreciative for the immediate response from the WPM team.",
    rating: 5
  },
  {
    id: 3,
    name: "Carrie R.",
    role: "Rental Property Owner",
    text: "WPM did a great job managing my parent’s Westwood home from the time they moved into assisted living until we were ready to sell it six years later. Josh and his team took care of everything for me as an absentee owner and always kept me in the loop.",
    rating: 5
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden min-h-[350px] md:min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-brand-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-serif text-slate-700 italic mb-8 leading-relaxed px-4 md:px-12">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div className="font-sans">
              <div className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-slate-500">{testimonials[currentIndex].role}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-brand-primary' : 'bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all text-slate-600"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};