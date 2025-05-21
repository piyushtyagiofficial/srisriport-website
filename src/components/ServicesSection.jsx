import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, Globe, Ship, DollarSign, Headset as HeadsetMic, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FileText className="h-10 w-10 text-blue-900" />,
      title: "Documentation Services",
      description: "Complete assistance with GST, IEC code, RCMC, and other trade licenses required for export-import in India.",
      link: "/services"
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-900" />,
      title: "Market Discovery",
      description: "Finding international markets and connecting with verified customers to expand your business globally.",
      link: "/services"
    },
    {
      icon: <Ship className="h-10 w-10 text-blue-900" />,
      title: "End-to-End Logistics",
      description: "Comprehensive logistics solutions including freight forwarding, transportation, and warehousing.",
      link: "/services"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-blue-900" />,
      title: "Payment Compliance",
      description: "Oversight of payment procedures and ensuring compliance with international trade regulations.",
      link: "/services"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-900" />,
      title: "EXIM Consultancy",
      description: "Ongoing consultancy services to help navigate the complexities of international trade.",
      link: "/services"
    },
    {
      icon: <HeadsetMic className="h-10 w-10 text-blue-900" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to address any concerns or queries related to your exports.",
      link: "/services"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive export-import solutions to help your textile business go global
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-gray-100"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-blue-900 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;