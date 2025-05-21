import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (animation === 'stagger') {
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                staggerItems.forEach((item) => {
                  item.classList.add('active');
                });
              } else {
                entry.target.classList.add(animation);
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animation !== 'stagger' ? 'opacity-0' : ''}`}
      style={{
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
