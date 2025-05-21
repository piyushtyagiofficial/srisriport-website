import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "SriSriPort helped us navigate the complex world of textile exports with ease. Their documentation services and market connections were invaluable.",
      author: "Rajesh Kumar",
      company: "Textile Creations Ltd",
      location: "Mumbai"
    },
    {
      quote: "From documentation to logistics, their team guided us through every step. We've expanded to 5 new international markets in just 6 months.",
      author: "Priya Sharma",
      company: "Innovative Fabrics",
      location: "Surat"
    },
    {
      quote: "As a first-time exporter, I was lost until I found SriSriPort. Their expertise and 24/7 support made our international journey smooth.",
      author: "Amit Patel",
      company: "Modern Textiles",
      location: "Ahmedabad"
    },
    {
      quote: "The marketplace feature connected us with genuine buyers from across the globe. Our export volume has increased by 240% in one year.",
      author: "Neha Singh",
      company: "Singh Exports",
      location: "Delhi"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section className="py-16 bg-blue-900 text-white relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">What Our Clients Say</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Hear from businesses that have successfully gone global with our help
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index === (currentIndex + 1) % testimonials.length 
                      ? 'opacity-0 translate-x-full' 
                      : 'opacity-0 -translate-x-full'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-white/20">
                  <div className="mb-6 text-yellow-400">
                    <Quote size={48} />
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="ml-0">
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-blue-200">
                        {testimonial.company}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Previous testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Next testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;