import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default () => (
  <h1 className="brand">
    <Link to="/" title="SnapEngage">
      SnapEngage
    </Link>
  </h1>
);
