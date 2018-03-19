import React from 'react';

export default ({ id, alias, change, checked }) => (
  <div className="field contact">
    <label>
      <input type="checkbox" value={id} onChange={change} checked={checked} />
      <span>{alias}</span>
    </label>
  </div>
);
