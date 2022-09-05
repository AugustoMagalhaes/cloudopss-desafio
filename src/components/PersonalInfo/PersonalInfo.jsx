import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <section className="personal-container">
      <section className="personal-title-container">
        <h3 className="personal-title">Olá!</h3>
        <h3 className="personal-title">Precisamos conhecer</h3>
        <h3 className="personal-title">um pouco sobre de você:</h3>
      </section>

      <section className="personal-input-container">
        <section className="input-row">
          <section className="radio-row">
            <input type="radio" name="gender" id="man" />
            Homem
          </section>
          <section className="radio-row">
            <input type="radio" name="gender" id="woman" />
            Mulher
          </section>

        </section>

        <section className="input-row">
          <label htmlFor="name">
            Nome
            <input type="text" name="name" id="name" placeholder="Priscila" className="input-text" />
          </label>
          <label htmlFor="surname">
            Sobrenome
            <input
              type="text"
              name="surname"
              id="surname"
              className="input-text"
              placeholder="Meireles"
            />
          </label>
        </section>

        <section className="input-row">
          <label htmlFor="birth-date">
            Data de nascimento
            <input
              type="text"
              name="birth-date"
              id="birth-date"
              className="input-text date-text"
              placeholder="00/00/0000"
            />
          </label>
        </section>

        <section className="input-row">
          <label htmlFor="weight">
            Peso
            <input
              type="text"
              name="weight"
              id="weight"
              className="input-text"
              placeholder="55kg"
            />
          </label>
          <label htmlFor="height">
            Altura
            <input
              type="text"
              name="height"
              id="height"
              className="input-text"
              placeholder="1,67m"
            />
          </label>
        </section>

        <section className="input-row">
          <label htmlFor="body-fat">
            Nível de gordura corporal
            <select name="body-fat" id="bodyfat" className="body-fat">
              <option value="magreza">Menor que 18,5</option>
              <option value="moderado" selected>Moderado (22 a 35%)</option>
            </select>
          </label>
        </section>

      </section>

    </section>
  );
}

export default PersonalInfo;
