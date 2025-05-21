import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Search, 
  CheckCircle, 
  ShieldCheck, 
  TrendingUp, 
  Users 
} from 'lucide-react';

const MarketplaceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const benefits = [
    {
      icon: <Globe className="h-10 w-10 text-blue-900" />,
      title: "Global Reach",
      description: "Connect with buyers and suppliers from across the globe."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-900" />,
      title: "Verified Contacts",
      description: "All buyers and sellers undergo verification for added security."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-900" />,
      title: "Secure Transactions",
      description: "Built-in systems to prevent frauds and payment defaults."
    },
    {
      icon: <Search className="h-10 w-10 text-blue-900" />,
      title: "Easy Discovery",
      description: "Powerful search tools to find exactly what you need."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-900" />,
      title: "Business Growth",
      description: "Expand your customer base and diversify market opportunities."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-900" />,
      title: "Expert Support",
      description: "Our team helps you navigate the marketplace effectively."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">SriSriPort Marketplace</h2>
          <p className="section-subtitle">
            The premier B2B platform connecting textile exporters and importers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div 
            className="relative overflow-hidden rounded-lg shadow-xl"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">For Exporters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Showcase your products to a global audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Connect with verified international buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Receive inquiries and expand your market reach</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Get assistance with documentation and logistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Secure payment processes to mitigate risks</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  to="/marketplace" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-medium px-6 py-2 rounded-md 
                    transition-all duration-300 inline-block"
                >
                  Register as Exporter
                </Link>
              </div>
            </div>
          </div>

          <div 
            className="relative overflow-hidden rounded-lg shadow-xl"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.5s ease-out 0.2s'
            }}
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">For Importers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Find quality textile products from verified manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Compare options from multiple suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Request samples and verify product quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Streamlined import process with expert guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Access to competitive pricing and reliable suppliers</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  to="/marketplace" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-medium px-6 py-2 rounded-md 
                    transition-all duration-300 inline-block"
                >
                  Register as Importer
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;