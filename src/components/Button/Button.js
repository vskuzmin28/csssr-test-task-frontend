import React from 'react';

import './Button.css';

const Button = ({ disabled = false, text, onButtonHit, className }) => (
  <button className={className} disabled={disabled} type="button" onClick={onButtonHit}>
    {text}
  </button>
);

export default Button;
