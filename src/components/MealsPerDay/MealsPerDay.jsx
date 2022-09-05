import React from 'react';
import './MealsPerDay.css';

function MealsPerDay() {
  return (
    <section className="mealsperday-container">
      <section className="mealsperday-title-container">
        <h3 className="mealsperday-title">Quantas refeições</h3>
        <h3 className="mealsperday-title">você faz ao dia?</h3>
      </section>
      <section className="mealsperday-input-container">
        <p className="arrow-right" />
        <select name="meal-count" id="meal-count" defaultValue="3" className="meal-count">
          <option value="1" className="meal-option">01 Refeição</option>
          <option value="2" className="meal-option">02 Refeições</option>
          <option value="3" className="meal-option">03 Refeições</option>
        </select>
      </section>
    </section>
  );
}

export default MealsPerDay;
