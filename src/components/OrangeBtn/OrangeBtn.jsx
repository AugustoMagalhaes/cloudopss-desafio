import PropTypes from 'prop-types';
import React from 'react';
import './OrangeBtn.css';

function OrangeBtn({ hasBorder, specificClass, text }) {
  return (
    <button type="button" className={`${specificClass} ${hasBorder && 'whitebd'}`}>
      {text}
    </button>
  );
}

OrangeBtn.propTypes = {
  hasBorder: PropTypes.bool,
  text: PropTypes.string.isRequired,
  specificClass: PropTypes.string.isRequired,
};

OrangeBtn.defaultProps = {
  hasBorder: false,
};

export default OrangeBtn;
