import React from 'react';
import './Card.css';

const Card = ({ src, alt }) => {
  return (
    <div className='card-container'>
      <img className='card-img' src={src} alt={alt} />
    </div>
  );
};

export default Card;
