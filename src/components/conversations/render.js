import React from 'react';

import For from 'components/helpers/for';
import Conversation from 'components/conversation';

export default ({ conversations }) => (
  <div>
    <h2>Conversations</h2>
    <ul>
      <For each={conversations}>
        <Conversation />
      </For>
    </ul>
  </div>
);
