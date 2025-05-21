import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import TestimonialSection from '../components/TestimonialSection';
import CallToAction from '../components/CallToAction';
import { FileText, Globe, Ship, DollarSign, Briefcase, Headset as HeadsetMic, CheckCircle } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - SriSriPort';
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FileText className="h-16 w-16 text-blue-900" />,
      title: "Documentation Services",
      description: "We assist with all necessary export-import documentation to ensure compliance and smooth operations.",
      details: [
        "GST registration assistance",
        "Importer Exporter Code (IEC) application",
        "Registration cum Membership Certificate (RCMC)",
        "Indian Chamber of Commerce membership",
        "Commercial invoices preparation",
        "Shipping bills and bills of entry",
        "Various trade licenses and permits"
      ]
    },
    {
      icon: <Globe className="h-16 w-16 text-blue-900" />,
      title: "Market Discovery",
      description: "We help you identify and connect with the right international markets and customers for your products.",
      details: [
        "Market potential analysis",
        "Buyer identification and verification",
        "Competitor analysis",
        "Price benchmarking",
        "Product adaptation recommendations",
        "Market entry strategy",
        "Business matchmaking"
      ]
    },
    {
      icon: <Ship className="h-16 w-16 text-blue-900" />,
      title: "End-to-End Logistics",
      description: "Our comprehensive logistics solutions ensure your products reach their destination safely and on time.",
      details: [
        "Freight forwarding services",
        "Container booking and tracking",
        "Transportation arrangements",
        "Warehousing solutions",
        "Customs clearance",
        "Insurance coordination",
        "Last-mile delivery management"
      ]
    },
    {
      icon: <DollarSign className="h-16 w-16 text-blue-900" />,
      title: "Payment Compliance",
      description: "We oversee payment procedures and ensure compliance with international trade regulations.",
      details: [
        "Letter of Credit (LOC) management",
        "Payment terms negotiation",
        "Financial risk assessment",
        "Currency exchange guidance",
        "Payment default prevention",
        "Transaction verification",
        "Regulatory compliance checks"
      ]
    },
    {
      icon: <Briefcase className="h-16 w-16 text-blue-900" />,
      title: "EXIM Consultancy",
      description: "Our expert consultants provide ongoing guidance for all aspects of your export-import operations.",
      details: [
        "Export-import strategy development",
        "Trade compliance advisory",
        "Export incentives guidance",
        "Market expansion planning",
        "Risk assessment and management",
        "Trade dispute resolution",
        "EXIM policy updates and implementation"
      ]
    },
    {
      icon: <HeadsetMic className="h-16 w-16 text-blue-900" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round-the-clock to address any queries or concerns.",
      details: [
        "Real-time shipment tracking",
        "Emergency issue resolution",
        "Multi-lingual support",
        "Documentation assistance",
        "Process clarification",
        "Stakeholder coordination",
        "Regular status updates"
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive export-import solutions for textile businesses"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Our suite of specialized services designed to simplify your export-import journey
            </p>
          </div>
          
          <div 
            ref={ref}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`bg-gray-100 rounded-lg p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
                    <h4 className="text-xl font-semibold mb-4">Why Choose Our {service.title}</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Expert Guidance</p>
                          <p className="text-gray-600 text-sm">Our specialists have 15+ years of industry experience</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Streamlined Process</p>
                          <p className="text-gray-600 text-sm">We handle all complexities so you can focus on your core business</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Time & Cost Savings</p>
                          <p className="text-gray-600 text-sm">Efficient processes that reduce delays and minimize expenses</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default Services;