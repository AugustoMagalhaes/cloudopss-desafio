import React from 'react';
import ChefHat from '../../images/chef-hat-removebg-preview.png';
import './DietDifficulty.css';

function DietDifficulty() {
  return (

    <section className="dietdiff-container">
      <section className="dietdiff-title-container">
        <h3 className="dietdiff-title">Nível de dificuldade</h3>
        <h3 className="dietdiff-title">da dieta:</h3>
      </section>
      <section className="dietdiff-input-container">
        Input
      </section>
      <img src={ChefHat} alt="A Chef's Hat" className="chef-hat" />
    </section>
  );
}

export default DietDifficulty;
