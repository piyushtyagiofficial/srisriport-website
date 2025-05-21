import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialSection from '../components/TestimonialSection';
import ProcessSection from '../components/ProcessSection';
import MarketplaceSection from '../components/MarketplaceSection';
import FaqSection from '../components/FaqSection';
import CallToAction from '../components/CallToAction';

const Home = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'SriSriPort - World\'s First Textile Export-Import Consultancy';
  }, []);

  return (
    <div>
      <Hero />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <MarketplaceSection />
      <TestimonialSection />
      <FaqSection />
      <CallToAction />
    </div>
  );
};

export default Home;