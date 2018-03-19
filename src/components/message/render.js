import React from 'react';

import For from 'components/helpers/for';
import Interaction from 'components/interaction';

import './styles.css';

export default ({ date, interactions }) => (
  <div className="message">
    <dl className="date">
      <dt>Start date</dt>
      <dd>{date}</dd>
    </dl>
    <dl className="interactions">
      <dt>Interaction</dt>
      <dd>
        <blockquote>
          <For each={interactions}>
            <Interaction />
          </For>
        </blockquote>
      </dd>
    </dl>
  </div>
);
