import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/app';
import Routes from 'components/routes';

export default () => (
  <Router>
    <App>
      <Routes />
    </App>
  </Router>
);
