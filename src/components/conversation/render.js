import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'routes';

export default ({ id, participants }) => (
  <li>
    <Link to={routes.conversation(id)}>{participants}</Link>
  </li>
);
