import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Search, 
  Ship, 
  DollarSign, 
  Handshake, 
  BarChart3 
} from 'lucide-react';

const ProcessSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-blue-900" />,
      title: "Documentation",
      description: "We assist with all necessary export documentation including GST, IEC, RCMC, and other trade licenses."
    },
    {
      icon: <Search className="h-8 w-8 text-blue-900" />,
      title: "Market Research",
      description: "Our team conducts thorough market research to identify the best opportunities for your products."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-900" />,
      title: "Buyer Connection",
      description: "We connect you with verified international buyers interested in your textile products."
    },
    {
      icon: <Ship className="h-8 w-8 text-blue-900" />,
      title: "Logistics Management",
      description: "We handle shipping, transportation, and warehousing to ensure smooth delivery."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-900" />,
      title: "Payment Processing",
      description: "We oversee payment procedures and ensure compliance with all regulations."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-900" />,
      title: "Growth & Support",
      description: "We provide ongoing support and guidance to help scale your export business."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our simple six-step process to help you become a successful exporter
          </p>
        </div>

        <div 
          ref={ref}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.15}s`
                }}
              >
                <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-4 md:mb-0 relative ${
                    index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'
                  }`}>
                    {/* Timeline dot */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white hidden md:block
                      ${index % 2 === 0 ? 'right-0 translate-x-[calc(50%+1rem)]' : 'left-0 -translate-x-[calc(50%+1rem)]'}">
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 
                      ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* This empty div balances the grid */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Start Your Export Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;