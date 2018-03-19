import React from 'react';

import './styles.css';

export default ({ click }) => (
  <nav className="menu">
    <h4>Navigate trought:</h4>
    <ul>
      <li>
        <a href="#conversations" onClick={click}>
          Conversations
        </a>
      </li>
      <li>
        <a href="#contacts" onClick={click}>
          Team Chat
        </a>
      </li>
    </ul>
  </nav>
);
