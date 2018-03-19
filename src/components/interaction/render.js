import React from 'react';

import './styles.css';

export default ({ alias, message }) => (
  <dl className="interaction">
    <dt>{alias}</dt>
    <dd>{message}</dd>
  </dl>
);
