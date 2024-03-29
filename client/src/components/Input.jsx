// import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, type, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} onChange={handleChange} />
    </div>
  );
};
Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  };

export default Input;
