import React from 'react';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="relative py-24 md:py-32 flex items-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(to right, #1E3A8A, #1E40AF)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;