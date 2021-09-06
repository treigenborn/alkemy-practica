import React from 'react';
import './SubPageHero.css';
import Card from '../card/Card';

const supPageHero = ({ button, cardsData }) => {
  console.log(button);
  return (
    <div className='subPageHero-container'>
      <h1 className='cards-title'>{cardsData[0].title}</h1>
      <div className='hero-card-container'>
        {cardsData.map((e) => {
          return <Card src={e.src} alt={e.alt} key={e.src} />;
        })}
      </div>
      {button && <button className='subPageHero-button'>Ver todas</button>}
    </div>
  );
};

export default supPageHero;
