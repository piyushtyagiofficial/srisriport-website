import React, { useEffect, useState } from 'react';
import { ArrowRight, Ship, FileText, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const headlines = [
    "World's First Dedicated Textile Export-Import Consultancy",
    "Making Indian Textile Manufacturers Global",
    "Transforming Businesses with Expert EXIM Solutions",
    "Your One-Stop Solution for All Export-Import Needs"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [headlines.length]);

  const features = [
    { 
      icon: <FileText className="w-6 h-6 text-yellow-400" />, 
      title: "Documentation", 
      description: "Complete assistance with GST, IEC, RCMC & trade licenses" 
    },
    { 
      icon: <Globe className="w-6 h-6 text-yellow-400" />, 
      title: "Market Discovery", 
      description: "Connect with verified international buyers & partners" 
    },
    { 
      icon: <Ship className="w-6 h-6 text-yellow-400" />, 
      title: "End-to-End Logistics", 
      description: "Seamless transport, shipping & warehousing solutions" 
    },
    { 
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />, 
      title: "Business Growth", 
      description: "Ongoing support to maximize your international presence" 
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="border border-white/20"></div>
          ))}
        </div>
      </div>
      
      {/* Animated globe */}
      <div className="absolute -right-64 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-white/10 opacity-20 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-white/10 opacity-20 animate-[spin_40s_linear_infinite_reverse]"></div>

      <div className="container-custom relative z-10 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative h-32 mb-6 overflow-hidden">
              {headlines.map((headline, index) => (
                <h1 
                  key={index}
                  className={`text-4xl md:text-5xl font-bold leading-tight absolute transition-all duration-500 w-full ${
                    index === currentIndex 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  {headline.split(' ').map((word, i) => (
                    <span 
                      key={i} 
                      className={word.includes('Textile') || word.includes('Export') || word.includes('Import') ? 'text-yellow-400' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h1>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Empowering businesses to go global with proper knowledge, timely support, and strong networks. Your partner in international trade success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-medium px-8 py-3 rounded-md 
                  transition-all duration-300 inline-flex items-center justify-center group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 
                  font-medium px-8 py-[10px] rounded-md transition-all duration-300 inline-block text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-semibold mb-6 text-center">How We Help Your Business</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="font-medium text-lg text-yellow-300">{feature.title}</h3>
                        <p className="text-blue-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <Link 
                  to="/about" 
                  className="text-yellow-400 hover:text-yellow-300 inline-flex items-center text-sm font-medium"
                >
                  Learn more about us
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;