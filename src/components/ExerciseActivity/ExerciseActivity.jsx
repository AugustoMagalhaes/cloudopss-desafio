import React from 'react';
import Dumbbel from '../../images/dumbbel.png';
import './ExerciseActivity.css';

function ExerciseActivity() {
  return (
    <section className="exercise-container">
      <section className="exercise-title-container">
        <h3 className="exercise-title">Você pratica</h3>
        <h3 className="exercise-title">exercícios físicos?</h3>
      </section>
      <section className="exercise-input-container">
        Input
      </section>
      <img src={Dumbbel} alt="A dumbbel" className="dumbbel" />
    </section>
  );
}

export default ExerciseActivity;
