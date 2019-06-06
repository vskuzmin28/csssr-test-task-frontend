import React from 'react';

import './Select.css';

const Select = ({ from = 1, to, onChange, className }) => (
  <select className={className} onChange={e => onChange(e.target.value)}>
    {[...Array(to - from)].map((_, i) => (
      <option key={i + from} value={i + from}>
        {i + from}
      </option>
    ))}
  </select>
);

export default Select;