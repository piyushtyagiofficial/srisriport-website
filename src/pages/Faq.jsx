import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const Faq = () => {
  useEffect(() => {
    document.title = 'FAQ - SriSriPort';
  }, []);

  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState({});

  const toggleFaq = (category, index) => {
    setOpenIndex({
      ...openIndex,
      [`${category}-${index}`]: !openIndex[`${category}-${index}`]
    });
  };

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'market', name: 'Market & Buyers' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'payments', name: 'Payments' },
    { id: 'marketplace', name: 'Marketplace' },
  ];

  const faqs = {
    general: [
      {
        question: "What is SriSriPort LLP and what services does it offer?",
        answer: "SriSriPort LLP is an Export and Import firm, which provides logistic support, custom clearance, finding customers for Export/Import, container booking/tracking and more. We help companies Export and Import their goods and services to expand business exponentially. We are a ONE STOP SOLUTION platform for all your EXIM needs including documentation procedures, market discovery, logistics, payment compliance, consultancy, and 24/7 support."
      },
      {
        question: "How old is your company and why should we trust SriSriPort?",
        answer: "SriSriPort was incorporated on December 31st, 2020. Our business model is designed to provide everything that other EXIM Companies don't. Our team of 50+ experts with an experience of 15+ years in the industry strives hard to bring the best market opportunities for our clients."
      },
      {
        question: "What is your benefit and motive to serve companies for export?",
        answer: "Our motive is to make India an exporting economy. The very foundation of this firm was to boost the Indian economy in a positive direction. Our goal is to make India a $40 Trillion Economy by the end of 2030."
      },
      {
        question: "Why choose SriSriPort over others?",
        answer: "Other businesses generally provide an isolated service and then leave you in the dark, lost as to what to do next. However, once you become a part of SriSriPort, we help you right from the initial stages to the post export/import stages. Our continuous customer service and guidance ensures all round growth of our clients in International markets. Moreover, our continuous lead generation facility assures our clients of stability and growth."
      },
      {
        question: "Does SriSriPort buy/sell products itself?",
        answer: "No, SriSriPort doesn't buy products or sell them further. We are just an intermediary bridging the gap between importers and exporters, while providing all the related EXIM services. Our motto is to make the EXIM process as smooth as possible for our clients while ensuring their growth and increased profits."
      }
    ],
    documentation: [
      {
        question: "What documents are required to start exporting?",
        answer: "An exporter needs GST registration, IEC code, RCMC and an ICC certification. An AEO code is preferable if you wish to speed up the custom clearance processes. Our documentation team will help you to get all the documents without any hassle."
      },
      {
        question: "What is the IEC code and RCMC?",
        answer: "Import Export Code (IEC) is a 10-digit identification number issued by the DGFT, Government of India. Companies must obtain this code to start import-export business in India. RCMC (Registration cum Membership Certificate) is issued as a license to carry out exports and avail concessions under the foreign trade policy. It's issued by the Federation of Indian Export Organisations (FIEO)."
      },
      {
        question: "What is the Indian Chamber of Commerce?",
        answer: "The Indian Chamber of Commerce, or ICC as it is popularly known, is the premier body of business and industry in Eastern and North-Eastern India. The ICC constituents are mainly large manufacturing units with operations all over the country and abroad. A large number of corporate bodies of India form the backbone of the organization."
      },
      {
        question: "Can you help us get IEC code, RCMC, and other documentation?",
        answer: "Yes, our team of Documentation experts with an experience of 15 years and widespread network can help you get your documents within no time."
      },
      {
        question: "We don't know anything about export procedures. Can we still export?",
        answer: "That's exactly why SriSriPort is here! Even if you don't have ANY EXIM experience, it won't be a problem once you join hands with us! We provide services right from Documentation, Finding buyers, Logistics and even Compliances."
      }
    ],
    market: [
      {
        question: "How do you find international buyers for our products?",
        answer: "Our team with expertise in International business has a widespread network and connections around the globe. We find the best buyers for your products and finalize deals for our clients. We conduct thorough market research, attend international trade shows, and leverage our global network to connect you with verified buyers."
      },
      {
        question: "We are unable to find any supplier. How can you help us?",
        answer: "Our team with expertise in International business has a widespread network and connections around the globe. We find the best sellers and finalize deals for our clients. We can connect you with verified suppliers based on your specific requirements."
      },
      {
        question: "What is the benefit of exports and how can we obtain incentives from Government?",
        answer: "Benefits of export includes: 1) Increased customer base, 2) Expanded product cycle, 3) Diversifying market opportunities, 4) Potential financial assistance. Talking about obtaining incentives, our documentation experts will help receive the best incentives necessary for your business to go global."
      },
      {
        question: "How do you verify international buyers to ensure they are genuine?",
        answer: "Our list of buyers undergo a thorough check of genuineness and reliability before we approach them on behalf of our clients. We verify company registration, check trade references, analyze past trade history, and conduct various background checks to ensure you only deal with legitimate businesses."
      },
      {
        question: "What markets are currently most promising for Indian textile exports?",
        answer: "Currently, markets like the USA, EU countries, UAE, Australia, and parts of Africa show strong demand for Indian textiles. However, the optimal markets for your business depend on your specific products, pricing, and capabilities. Our market research team can provide tailored recommendations based on your particular situation."
      }
    ],
    logistics: [
      {
        question: "Can you provide freight forwarding services, transportation and storage?",
        answer: "Yes, once you join hands with us, we can take up the responsibility of Freight Forwarding, Transportation and Warehousing. Our effective and efficient logistics team handles your products with care and ensure on time delivery of export orders."
      },
      {
        question: "How does the container booking and tracking work?",
        answer: "We handle the entire process of container booking based on your shipment requirements. Once booked, we provide you with real-time tracking information so you can monitor your shipment at every stage of its journey. Our 24/7 support team is available to address any concerns during transit."
      },
      {
        question: "What shipping methods do you support?",
        answer: "We support all major shipping methods including sea freight, air freight, and land transportation. The optimal method depends on your product type, volume, destination, urgency, and budget. Our logistics experts will recommend the most suitable option for your specific needs."
      },
      {
        question: "How do you handle customs clearance?",
        answer: "Our experienced customs team manages the entire customs clearance process. We prepare and submit all required documentation, coordinate with customs officials, address any queries or inspections, and ensure your shipment clears customs without delays or complications."
      },
      {
        question: "Do you provide insurance for shipments?",
        answer: "Yes, we can arrange comprehensive cargo insurance for your shipments to protect against loss or damage during transit. We work with reputable insurance providers to offer competitive rates and suitable coverage based on your specific requirements."
      }
    ],
    payments: [
      {
        question: "What preventive measures does SriSriPort take against frauds?",
        answer: "Our list of buyers undergoes a thorough check of genuineness and reliability before we approach them on behalf of our clients. Payment defaults are prevented through tools like LOC, etc. SriSriPort presents only trustworthy buyers to our clients. Our legal team remains vigilant to address any potential issues immediately."
      },
      {
        question: "What payment methods are typically used in international trade?",
        answer: "Common payment methods include Letter of Credit (LC), Documentary Collection, Open Account, and Advance Payment. Each has different levels of security and benefits. We help you select the most appropriate payment method based on your trading relationship, risk tolerance, and specific circumstances."
      },
      {
        question: "How do you handle currency exchange and fluctuations?",
        answer: "We provide guidance on managing currency risks through various strategies including forward contracts, currency options, and proper pricing strategies. Our financial experts can help you minimize the impact of currency fluctuations on your profitability."
      },
      {
        question: "What is a Letter of Credit (LC) and how does it work?",
        answer: "A Letter of Credit is a document from a bank guaranteeing that a buyer's payment will be received on time and for the correct amount. If the buyer is unable to make payment, the bank will cover the full or remaining amount. We assist in preparing LC documentation and ensuring all terms are met for successful payment release."
      },
      {
        question: "How long does it typically take to receive payment for exports?",
        answer: "Payment timelines vary based on the payment method, destination country, and specific deal terms. Advance payments are immediate, while LC payments typically process within 5-10 business days after document submission. Open account terms commonly range from 30 to 90 days. We work to optimize payment cycles for your business needs."
      }
    ],
    marketplace: [
      {
        question: "How does SriSriPort's Marketplace help my business?",
        answer: "SriSriPort's Marketplace allows importers to find the best products around the globe and exporters to find genuine buyers to go global. You can register FOR FREE on our marketplace and grow your business. Listing your products will provide you the platform to display your quality products to the world and attract more international customers."
      },
      {
        question: "How much will it cost to affiliate with SriSriPort?",
        answer: "Registration and listing of products on our website is absolutely free. Our packages differ as per the services you choose. Register now and let our Business Development Associate help you select the best package for your needs!"
      },
      {
        question: "How do I list my products on the marketplace?",
        answer: "After registering and creating your business profile, you can easily list your products by providing details such as product name, description, specifications, pricing, minimum order quantity, and product images. Our user-friendly interface makes the process simple and straightforward."
      },
      {
        question: "How are buyers and sellers verified on the marketplace?",
        answer: "All participants undergo a multi-step verification process that includes document verification (business registration, tax documents), reference checks, and periodic review. This ensures a secure trading environment where you can connect with legitimate businesses."
      },
      {
        question: "Can I communicate directly with potential buyers/suppliers?",
        answer: "Yes, our platform includes secure messaging features that allow direct communication between buyers and sellers. You can discuss requirements, negotiate terms, and build relationships while maintaining the security and structure of our platform."
      }
    ]
  };

  const filteredFaqs = searchTerm
    ? Object.values(faqs).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs[activeCategory];

  return (
    <div>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Get answers to common questions about export-import and our services"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions or keywords..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {!searchTerm && (
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeCategory === category.id
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
            
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={`${searchTerm ? 'search' : activeCategory}-${index}`}
                  className={`rounded-lg overflow-hidden border ${
                    openIndex[`${searchTerm ? 'search' : activeCategory}-${index}`] 
                      ? 'border-blue-300 shadow-md' 
                      : 'border-gray-200'
                  } transition-all duration-300`}
                >
                  <button
                    className={`w-full text-left p-5 flex justify-between items-center ${
                      openIndex[`${searchTerm ? 'search' : activeCategory}-${index}`] 
                        ? 'bg-blue-50' 
                        : 'bg-white hover:bg-gray-50'
                    } transition-all duration-300`}
                    onClick={() => toggleFaq(searchTerm ? 'search' : activeCategory, index)}
                  >
                    <span className="font-medium text-lg pr-8">{faq.question}</span>
                    {openIndex[`${searchTerm ? 'search' : activeCategory}-${index}`] 
                      ? <ChevronUp className="h-5 w-5 text-blue-900 flex-shrink-0" /> 
                      : <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    }
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 bg-white ${
                      openIndex[`${searchTerm ? 'search' : activeCategory}-${index}`] 
                        ? 'max-h-[500px] p-5' 
                        : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-3">No questions found matching "{searchTerm}"</p>
                  <p className="text-sm text-gray-500">Try different keywords or ask us directly</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer to your question, feel free to contact our team. We're here to help!
              </p>
              <a 
                href="/contact" 
                className="btn-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default Faq;