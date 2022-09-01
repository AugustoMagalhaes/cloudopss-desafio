import React from 'react';
import { Link } from 'react-router-dom';
import OrangeBtn from '../OrangeBtn/OrangeBtn';

function Navbar() {
  return (
    <nav>
      <section>
        Minna
      </section>
      <Link to="/">Como fazemos</Link>
      <Link to="/">Planos e preços</Link>
      <Link to="/">Receitas</Link>
      <Link to="/">Sobre nós</Link>
      <OrangeBtn hasBorder="" text="Inscreva-se" />
      <OrangeBtn hasBorder="" text="Login" />
    </nav>

  );
}

export default Navbar;
