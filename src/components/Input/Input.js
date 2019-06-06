import React from 'react';

const Input = ({ onBlur, label, onTextChange, value }) => (
  <span>
    <div>{label}</div>
    <input className='card__input' type="text" onBlur={onBlur} onChange={e => onTextChange(e.target.value)} value={value} />
  </span>
);

export default Input;
