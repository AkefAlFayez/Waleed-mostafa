import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
