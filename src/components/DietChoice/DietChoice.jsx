import React from 'react';
import DietType from '../DietType/DietType';
import './DietChoice.css';

function DietChoice() {
  const dietTypes = ['Equilibrada', 'Paleolítica', 'Cetogênica', 'Vegetariana',
    'Jejum', 'Sem Lactose', 'Vegana', 'Low Carb', 'Sem Lactose'];
  const dietKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="dietchoice-container">
      <section className="dietchoice-border" />
      <section className="dietchoice-title-container">
        <h3 className="dietchoice-title">Qual tipo de dieta</h3>
        <h3 className="dietchoice-title">você gostaria?</h3>
      </section>
      <section className="dietchoice-input-container">
        {
          dietTypes?.map((type, index) => <DietType diet={type} key={dietKeys[index]} />)
        }
      </section>
    </section>
  );
}

export default DietChoice;
