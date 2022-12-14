import React from 'react';
import { Link } from 'react-router-dom';
import MinnaLogo from '../../images/minna-logo.png';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav-header">
      <section className="logo-container">
        <Link to="/">
          <img src={MinnaLogo} alt="Minna Logo" />
        </Link>
      </section>
      <section className="nav-link-container">
        <Link to="/" className="nav-link">Como fazemos</Link>
        <Link to="/" className="nav-link">Planos e preços</Link>
        <Link to="/" className="nav-link">Receitas</Link>
        <Link to="/" className="nav-link">Sobre nós</Link>
      </section>

      <section className="btn-container">
        <OrangeBtn hasBorder specificClass="nav-btn" text="Inscreva-se" />
        <OrangeBtn hasBorder="" specificClass="nav-btn" text="LOGIN" />
      </section>

    </nav>

  );
}

export default Navbar;
