import PropTypes from 'prop-types';
import React from 'react';
import './OrangeBtn.css';

function OrangeBtn({ hasBorder, text }) {
  return (
    <button type="button" className={`nav-btn ${hasBorder && 'whitebd'}`}>
      {text}
    </button>
  );
}

OrangeBtn.propTypes = {
  hasBorder: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

OrangeBtn.defaultProps = {
  hasBorder: false,
};

export default OrangeBtn;
