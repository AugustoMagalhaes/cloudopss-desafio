import React from 'react';
import EnergyBottle from '../../images/energy-drink-bottle.png';
import './Suplements.css';

function Suplements() {
  return (
    <section className="suplements-container">
      <section className="suplements-title-container">
        <h3 className="suplements-title">Gostaria de utilizar</h3>
        <h3 className="suplements-title">suplementos esportivos?</h3>
      </section>
      <section className="suplements-input-container">
        Input
      </section>
      <img src={EnergyBottle} alt="A dumbbel" className="dumbbel" />
    </section>
  );
}

export default Suplements;
