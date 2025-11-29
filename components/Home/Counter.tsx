import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const incrementTime = (duration * 1000) / end;

      const step = () => {
        setCount(prev => {
          if (prev < end) {
            // Accelerate slightly for larger numbers
            const diff = end - prev;
            const jump = Math.ceil(diff / 20); 
            const next = prev + jump;
            return next > end ? end : next;
          }
          return end;
        });
      };
      
      // Simple interval for demo purposes, framer-motion useSpring is better for physics
      // but this is lightweight for "units managed" etc.
      const timer = setInterval(step, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};