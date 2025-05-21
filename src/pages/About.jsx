import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import StatsSection from '../components/StatsSection';
import TestimonialSection from '../components/TestimonialSection';
import { Calendar, Target, Users, Award } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - SriSriPort';
  }, []);

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'SriSriPort was incorporated on December 31st, 2020 with a vision to transform Indian textile manufacturers into successful exporters.'
    },
    {
      year: '2021',
      title: 'Launch of Services',
      description: 'Started offering end-to-end export-import solutions including documentation, market discovery, logistics, and compliance services.'
    },
    {
      year: '2022',
      title: 'Marketplace Launch',
      description: 'Introduced the SriSriPort Marketplace, connecting textile exporters and importers worldwide.'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded our team to 50+ industry experts to better serve our growing client base.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Working towards our goal of making India a $40 Trillion Economy by 2030 through export growth.'
    }
  ];

  const team = [
    {
      name: 'Rajiv Verma',
      position: 'CEO & Founder',
      bio: '15+ years of experience in international trade and textile industry.'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Documentation',
      bio: 'Expert in export-import documentation and compliance procedures.'
    },
    {
      name: 'Amit Patel',
      position: 'Market Research Director',
      bio: 'Specializes in identifying international market opportunities.'
    },
    {
      name: 'Neha Singh',
      position: 'Logistics Head',
      bio: 'Oversees all logistics operations and ensures timely delivery.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="About SriSriPort" 
        subtitle="World's first dedicated textile export-import consultancy firm" 
      />
      
      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div 
            ref={missionRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div
              style={{
                opacity: missionInView ? 1 : 0,
                transform: missionInView ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Story</h2>
              <p className="text-gray-600 mb-6">
                SriSriPort LLP was founded with a vision to transform the Indian textile industry by making export-import processes accessible and manageable for all businesses, regardless of their size or experience.
              </p>
              <p className="text-gray-600 mb-6">
                As the world's first dedicated textile export-import consultancy, we bridge the gap between Indian manufacturers and global markets, providing end-to-end solutions that address all aspects of international trade.
              </p>
              <p className="text-gray-600">
                Our team of 50+ experts brings together more than 15 years of industry experience to guide businesses through every step of their export journey, from documentation to delivery and beyond.
              </p>
            </div>
            
            <div
              style={{
                opacity: missionInView ? 1 : 0,
                transform: missionInView ? 'translateX(0)' : 'translateX(20px)',
                transition: 'all 0.5s ease-out 0.2s'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="mb-4">
                    <Target className="h-10 w-10 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To simplify the export-import process for textile businesses and help them expand their global footprint through expert guidance and comprehensive support.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="mb-4">
                    <Users className="h-10 w-10 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Team</h3>
                  <p className="text-gray-600">
                    A dedicated team of 50+ experts with extensive experience in international trade, logistics, documentation, and market research.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="mb-4">
                    <Award className="h-10 w-10 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <p className="text-gray-600">
                    Integrity, excellence, customer-centricity, and a commitment to driving economic growth through export promotion.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="mb-4">
                    <Calendar className="h-10 w-10 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    To boost the Indian economy by making India a $40 Trillion Economy by 2030 through increased exports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From our founding to the present day and our vision for the future
            </p>
          </div>
          
          <div 
            ref={timelineRef}
            className="relative max-w-4xl mx-auto"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="mb-12 md:mb-24 relative"
                style={{
                  opacity: timelineInView ? 1 : 0,
                  transform: timelineInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.15}s`
                }}
              >
                <div className={`md:grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className={`text-center md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-900 font-semibold text-sm mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden md:flex items-center justify-center ${
                    index % 2 === 1 ? 'md:order-1 md:justify-end' : 'md:justify-start'
                  }`}>
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center z-10 text-white font-bold">
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Leadership</h2>
            <p className="section-subtitle">
              Meet the experts behind SriSriPort's success
            </p>
          </div>
          
          <div 
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  opacity: teamInView ? 1 : 0,
                  transform: teamInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <StatsSection />
      <TestimonialSection />
    </div>
  );
};

export default About;