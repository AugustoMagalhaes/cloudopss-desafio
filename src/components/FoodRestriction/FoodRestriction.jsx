import React from 'react';
import './FoodRestriction.css';

function FoodRestriction() {
  const restrictions = ['Glúten', 'Amendoim', 'Ovos', 'Peixe', 'Leite', 'Soja', 'Mariscos', 'Porco', 'Bacon', 'Tomate', 'Leguminosas', 'Laticíneos'];
  return (
    <section className="foodrestriction-container">
      <section className="foodrestriction-title-container">
        <h3 className="foodrestriction-title">Você tem alguma</h3>
        <h3 className="foodrestriction-title">restrição alimentar?</h3>
      </section>
      <section className="foodrestriction-input-container">
        <section className="foodrestriction-radio">
          {
            restrictions?.map((restriction) => (
              <section className="radio-container">
                <input
                  type="radio"
                  name="restriction"
                  id="restriction"
                  className="restriction-radio"
                />
                <label htmlFor="restriction" className="restriction-label">{restriction}</label>
              </section>
            ))
          }
        </section>
        <section className="custom-restriction-container">
          <h4 className="custom-restriction-title">Adicione suas próprias restrições</h4>
          <input
            type="text"
            name="custom-restriction"
            id="custom-restriction"
            className="custom-restriction"
            placeholder="Digite aqui..."
          />
          <button type="button" className="custom-restriction-btn">Enviar</button>
        </section>
      </section>
    </section>
  );
}
export default FoodRestriction;
