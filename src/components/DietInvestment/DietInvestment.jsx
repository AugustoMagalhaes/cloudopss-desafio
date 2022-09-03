import React from 'react';
import PiggyBank from '../../images/piggy-bank-removebg-preview.png';
import './DietInvestment.css';

function DietInvestment() {
  return (
    <section className="dietinvest-container">
      <section className="dietinvest-title-container">
        <h3 className="dietinvest-title">Investimento</h3>
        <h3 className="dietinvest-title">na dieta:</h3>
      </section>
      <section className="dietinvest-input-container">
        Input
      </section>
      <img src={PiggyBank} alt="A Piggy Bank" className="piggy-bank" />
    </section>
  );
}

export default DietInvestment;
