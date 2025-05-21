import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, MapPin, Clock, BarChart3 } from 'lucide-react';

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      icon: <Users className="w-10 h-10 text-blue-900" />,
      value: 50,
      suffix: '+',
      label: 'Expert Consultants',
      description: 'Specialists in textile export-import'
    },
    {
      icon: <MapPin className="w-10 h-10 text-blue-900" />,
      value: 30,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global network of verified buyers'
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-900" />,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry knowledge & expertise'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-900" />,
      value: 1000,
      suffix: '+',
      label: 'Successful Exports',
      description: 'Helping businesses go global'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">The numbers that define our success in the global textile market</p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2 flex items-center justify-center">
                {inView ? (
                  <>
                    <CountUp end={stat.value} duration={2.5} />
                    <span>{stat.suffix}</span>
                  </>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;