import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter-container">
      <h4 className="newsletter-title">
        Receba conteúdos exclusivos!
      </h4>
      <section className="newsletter-info">
        <input type="email" name="newsletter-email" id="newsletter-email" className="newsletter-input" />
        <button type="submit" className="newsletter-btn">
          Enviar
        </button>
      </section>
    </section>
  );
}

export default Newsletter;
