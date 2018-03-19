import React from 'react';

import For from 'components/helpers/for';
import Message from 'components/message';

import './styles.css';

export default ({ messages }) => (
  <div className="chat">
    <For each={messages}>
      <Message />
    </For>
  </div>
);
