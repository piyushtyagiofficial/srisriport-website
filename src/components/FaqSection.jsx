import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is SriSriPort LLP and what services does it offer?",
      answer: "SriSriPort LLP is an Export and Import firm, which provides logistic support, custom clearance, finding customers for Export/Import, container booking/tracking and more. We help companies Export and Import their goods and services to expand business exponentially. We are a ONE STOP SOLUTION platform for all your EXIM needs including documentation procedures, market discovery, logistics, payment compliance, consultancy, and 24/7 support."
    },
    {
      question: "How old is your company and why should we trust SriSriPort?",
      answer: "SriSriPort was incorporated on December 31st, 2020. Our business model is designed to provide everything that other EXIM Companies don't. Our team of 50+ experts with an experience of 15+ years in the industry strives hard to bring the best market opportunities for our clients."
    },
    {
      question: "What documents are required to start exporting?",
      answer: "An exporter needs GST registration, IEC code, RCMC and an ICC certification. An AEO code is preferable if you wish to speed up the custom clearance processes. Our documentation team will help you to get all the documents without any hassle."
    },
    {
      question: "What is the IEC code and RCMC?",
      answer: "Import Export Code (IEC) is a 10-digit identification number issued by the DGFT, Government of India. Companies must obtain this code to start import-export business in India. RCMC (Registration cum Membership Certificate) is issued as a license to carry out exports and avail concessions under the foreign trade policy. It's issued by the Federation of Indian Export Organisations (FIEO)."
    },
    {
      question: "How does SriSriPort's Marketplace help my business?",
      answer: "SriSriPort's Marketplace allows importers to find the best products around the globe and exporters to find genuine buyers to go global. You can register FOR FREE on our marketplace and grow your business. Listing your products will provide you the platform to display your quality products to the world and attract more international customers."
    },
    {
      question: "What preventive measures does SriSriPort take against frauds?",
      answer: "Our list of buyers undergoes a thorough check of genuineness and reliability before we approach them on behalf of our clients. Payment defaults are prevented through tools like LOC, etc. SriSriPort presents only trustworthy buyers to our clients. Our legal team remains vigilant to address any potential issues immediately."
    },
    {
      question: "How much will it cost to affiliate with SriSriPort?",
      answer: "Registration and listing of products on our website is absolutely free. Our packages differ as per the services you choose. Register now and let our Business Development Associate help you select the best package for your needs!"
    },
    {
      question: "Does SriSriPort buy/sell products itself?",
      answer: "No, SriSriPort doesn't buy products or sell them further. We are just an intermediary bridging the gap between importers and exporters, while providing all the related EXIM services. Our motto is to make the EXIM process as smooth as possible for our clients while ensuring their growth and increased profits."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our export-import services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 rounded-lg overflow-hidden border ${
                openIndex === index ? 'border-blue-300 shadow-md' : 'border-gray-200'
              } transition-all duration-300`}
            >
              <button
                className={`w-full text-left p-5 flex justify-between items-center ${
                  openIndex === index ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                } transition-all duration-300`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-blue-900" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                }
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 bg-white ${
                  openIndex === index ? 'max-h-[500px] p-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-4 text-gray-600">
            Don't see your question here?
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;