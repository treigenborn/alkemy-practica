import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <hr className='hr-thick' />
      <nav className='footer-nav'>
        <ul className='footer-nav-list'>
          <li className='footer-nav-item left'>Noticias</li>
          <li className='footer-nav-item left'>Actividades</li>
          <li className='footer-nav-item left'>Novedades</li>
        </ul>
        <div className='footer-logo'>
          <h1>LOGO</h1>
        </div>
        <ul className='footer-nav-list'>
          <li className='footer-nav-item right'>Testimonios</li>
          <li className='footer-nav-item right'>Nosotros</li>
          <li className='footer-nav-item right'>Contacto</li>
        </ul>
      </nav>
      <hr className='hr-thin' />
      <div className='footer-down'>
        <ul className='social-media-links'>
          <li className='social-media-items'>FB</li>
          <li className='social-media-items'>TW</li>
          <li className='social-media-items'>IG</li>
          <li className='social-media-items'>LI</li>
        </ul>
        <p className='copyright'>2021 by Alkemy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
