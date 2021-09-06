import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='logo'>
        <h1>LOGO</h1>
      </div>

      <ul className='nav-list'>
        <li className='nav-item'>Inicio</li>
        <li className='nav-item'>Nosotros</li>
        <li className='nav-item'>Actividades</li>
        <li className='nav-item'>Novedades</li>
        <li className='nav-item'>Testimonios</li>
        <li className='nav-item'>Contacto</li>
        <li className='nav-item'>Contribuye</li>
      </ul>
      <div className='nav-login-buttons'>
        <button className='nav-button login'>Log in</button>
        <button className='nav-button registrate'>Registrate</button>
      </div>
    </nav>
  );
};

export default Navbar;
