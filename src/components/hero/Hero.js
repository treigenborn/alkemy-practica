import React from 'react';

const Hero = ({ src, alt }) => {
  return (
    <div className='hero-container'>
      <img src={src} alt={alt} className='hero-img' />
    </div>
  );
};

export default Hero;
