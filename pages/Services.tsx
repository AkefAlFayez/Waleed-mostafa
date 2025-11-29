import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { CheckCircle, Search, DollarSign, Wrench, FileText, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      icon: <Search className="w-10 h-10 text-brand-primary" />,
      title: "Tenant Screening & Placement",
      description: "We don't just find a tenant; we find the right tenant. Our rigorous screening includes credit checks, criminal background checks, employment verification, and past landlord references."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-brand-primary" />,
      title: "Rent Collection",
      description: "Say goodbye to chasing checks. We offer online payment portals for tenants, ensuring you get paid faster. We handle late fees and notices automatically."
    },
    {
      icon: <Wrench className="w-10 h-10 text-brand-primary" />,
      title: "Property Maintenance",
      description: "Our in-house team and network of vetted vendors handle everything from emergency repairs to routine inspections, keeping your property value high and costs low."
    },
    {
      icon: <FileText className="w-10 h-10 text-brand-primary" />,
      title: "Financial Reporting",
      description: "Access your financial data 24/7. We provide detailed monthly statements, end-of-year tax reports (1099s), and expense tracking through our secure owner portal."
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-brand-primary" />,
      title: "Legal & Eviction Protection",
      description: "California landlord-tenant laws are complex. We stay compliant with all regulations and handle the eviction process legally and efficiently if necessary."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-brand-primary" />,
      title: "Marketing & Vacancy Filling",
      description: "We Syndicate your listing to Zillow, Trulia, Apartments.com, and 40+ other sites. Professional photography and 3D tours ensure your property stands out."
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your investment goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100 h-full">
                  <div className="mb-6 p-4 bg-blue-50 rounded-full w-fit">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Transparent Pricing</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  We believe in simple, straightforward pricing models. No setup fees for new properties.
                </p>
                <ul className="space-y-4 mb-8 text-white">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-accent mr-3" /> 6-8% Management Fee</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-accent mr-3" /> 50% Leasing Fee</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-accent mr-3" /> No Renewal Fees</li>
                </ul>
                <Button variant="accent" onClick={() => navigate('/contact')}>Get a Custom Quote</Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://picsum.photos/seed/finance/800/800" 
                  alt="Property Contract" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};