import PropTypes from 'prop-types';
import React from 'react';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import './PlanType.css';

function PlanType({ title, planPrice, planDescription }) {
  return (
    <section className="plan-type-container">
      <section className="plan-type-title">
        {title?.map((item, index) => (
          <h3 className={index > 0 ? 'sub' : 'plan-title'}>
            {item}
          </h3>
        ))}
      </section>
      <section className="main-content-plan">
        <section className="price-container">
          <p className="real-sign">
            R$
          </p>
          <p className="plan-type-price">
            {planPrice}
          </p>
        </section>
        <article className="plan-type-description">
          {planDescription}
        </article>
        <OrangeBtn specificClass="plan-type-btn" text="Começar agora" />
      </section>
    </section>
  );
}

PlanType.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  planPrice: PropTypes.string.isRequired,
  planDescription: PropTypes.string.isRequired,
};

export default PlanType;
