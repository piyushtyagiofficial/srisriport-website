import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Textile Business Global?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hands with SriSriPort and transform your business into a successful export venture. Our expert team is ready to guide you at every step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-medium px-8 py-3 rounded-md 
                transition-all duration-300 inline-flex items-center justify-center group"
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/marketplace" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 
                font-medium px-8 py-[10px] rounded-md transition-all duration-300 inline-block text-center"
            >
              Explore Marketplace
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <p className="font-medium mb-4">
              Registration on our marketplace is completely FREE!
            </p>
            <p className="text-blue-100">
              List your products, connect with international buyers, and start your export journey today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;