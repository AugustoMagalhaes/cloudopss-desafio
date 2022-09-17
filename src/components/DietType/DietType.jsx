import PropTypes from 'prop-types';
import React from 'react';
import Broccoli from '../../images/broccoli-removebg-preview.png';
import './DietType.css';

function DietType({ diet }) {
  return (
    <section className="diet-type-container">
      <section className="img-container">
        <img src={Broccoli} alt="A broccoli" className="diet-img" />
      </section>
      <section className="radio-container">
        <input type="radio" name="diet-type" id="diet-type" className="diet-type" />
        <label htmlFor="diet-type" className="diet-label">{diet}</label>

      </section>
    </section>
  );
}

DietType.propTypes = {
  diet: PropTypes.string.isRequired,
};

export default DietType;
