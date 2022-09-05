import React from 'react';
import './MainGoal.css';

function MainGoal() {
  return (
    <section className="maingoal-container">
      <section className="maingoal-title-container">
        <h3 className="maingoal-title">
          Qual é o seu
        </h3>
        <h3 className="maingoal-title">
          objetivo principal?
        </h3>
      </section>
      <section className="maingoal-input-container">
        <p className="arrow-down" />
        <select name="goal" id="goal" size="4" className="select-goal">
          <option value="weightloss" className="goal-option">Emagrecer</option>
          <option value="keep" className="goal-option">Manter Peso</option>
          <option value="health" className="goal-option">Ganhar saúde</option>
          <option value="muscular" className="goal-option">Ganhar Massa Muscular</option>
        </select>
      </section>
    </section>
  );
}

export default MainGoal;
