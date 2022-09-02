import React from 'react';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import './Planning.css';

function Planning() {
  return (
    <section className="planning">
      <section className="planning-title-container">
        <h2 className="planning-title">
          Planejamos
        </h2>
        <h2 className="planning-title">
          tudo para você!
        </h2>
      </section>

      <OrangeBtn specificClass="planning-btn" text="Começar agora" />
    </section>
  );
}

export default Planning;
