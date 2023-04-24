import React from 'react';
import './todo.css';

const Button = ({ handleClick }) => (
  <button className="btn" onClick={handleClick}>
    Count finished tasks
  </button>
);

export default Button;
