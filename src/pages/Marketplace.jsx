import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';
import { 
  CheckCircle, 
  Globe, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Package, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  useEffect(() => {
    document.title = 'Marketplace - SriSriPort';
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    {
      icon: <Package className="h-10 w-10 text-blue-900" />,
      name: "Fabrics",
      products: ["Cotton Fabrics", "Silk Fabrics", "Woolen Fabrics", "Synthetic Fabrics"]
    },
    {
      icon: <Package className="h-10 w-10 text-blue-900" />,
      name: "Garments",
      products: ["Men's Wear", "Women's Wear", "Children's Wear", "Sportswear"]
    },
    {
      icon: <Package className="h-10 w-10 text-blue-900" />,
      name: "Home Textiles",
      products: ["Bed Linen", "Table Linen", "Kitchen Linen", "Bathroom Linen"]
    },
    {
      icon: <Package className="h-10 w-10 text-blue-900" />,
      name: "Technical Textiles",
      products: ["Medical Textiles", "Automotive Textiles", "Geotextiles", "Agrotextiles"]
    }
  ];

  const benefits = [
    {
      title: "For Exporters",
      items: [
        "Showcase products to global buyers",
        "Verified international customer connections",
        "Simplified export procedures",
        "Secure payment mechanisms",
        "End-to-end logistics support",
        "Market insights and trend analysis"
      ]
    },
    {
      title: "For Importers",
      items: [
        "Access to quality Indian textile products",
        "Verified supplier connections",
        "Competitive pricing options",
        "Quality assurance and sampling",
        "Streamlined import processes",
        "Logistics and documentation assistance"
      ]
    }
  ];

  const features = [
    {
      icon: <Globe className="h-12 w-12 text-blue-100" />,
      title: "Global Connectivity",
      description: "Connect with textile businesses from around the world in one centralized marketplace."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-blue-100" />,
      title: "Verified Businesses",
      description: "All marketplace participants undergo thorough verification for enhanced security and trust."
    },
    {
      icon: <Search className="h-12 w-12 text-blue-100" />,
      title: "Advanced Search",
      description: "Find specific products or suppliers using our powerful search and filtering tools."
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-100" />,
      title: "Streamlined Process",
      description: "From inquiry to delivery, our platform simplifies the entire export-import journey."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="SriSriPort Marketplace" 
        subtitle="Connect with global textile buyers and suppliers"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">The Textile B2B Marketplace</h2>
            <p className="section-subtitle">
              A digital platform connecting textile businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">What is SriSriPort Marketplace?</h3>
              <p className="text-gray-600 mb-6">
                SriSriPort Marketplace is a specialized B2B platform designed exclusively for the textile industry, connecting exporters and importers from around the world.
              </p>
              <p className="text-gray-600 mb-6">
                Our marketplace allows Indian textile manufacturers to showcase their products to international buyers, and helps importers find quality textile products from verified suppliers.
              </p>
              <p className="text-gray-600 mb-6">
                With built-in tools for communication, negotiation, and transaction management, our platform streamlines the entire export-import process.
              </p>
              <div>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center group"
                >
                  Join the Marketplace
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-blue-900 text-white p-6 rounded-lg shadow-md"
                  style={{
                    transform: `translateY(${index % 2 === 0 ? '20px' : '0'})`,
                  }}
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={ref}
            className="bg-gray-50 p-8 rounded-lg shadow-md mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-900 text-center">Explore Product Categories</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">{category.name}</h4>
                  <ul className="space-y-2">
                    {category.products.map((product, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span className="text-gray-600">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md ${
                  index === 0 ? 'bg-blue-900 text-white' : 'bg-gray-800 text-white'
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-4">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/contact" 
                      className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium px-6 py-2 rounded-md 
                        transition-all duration-300 inline-block"
                    >
                      Register as {benefit.title.split(' ')[1]}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">How to Join the Marketplace</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Registration on our marketplace is completely FREE! Follow these simple steps to join:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-2">Register</h4>
                <p className="text-gray-600">
                  Complete a simple registration form with your business details.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-2">Verify</h4>
                <p className="text-gray-600">
                  Complete the verification process to establish trust.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-2">Connect</h4>
                <p className="text-gray-600">
                  Start listing products or finding suppliers to grow your business.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center group"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default Marketplace;