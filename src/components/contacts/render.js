import React from 'react';

import For from 'components/helpers/for';
import Contact from 'components/contact';

export default ({ submit, query, filter, contacts, toggle, disabled }) => (
  <form onSubmit={submit}>
    <fieldset>
      <legend>Search</legend>
      <div className="field filter">
        <input
          type="text"
          placeholder="Find team members..."
          value={query}
          onChange={filter}
        />
      </div>
    </fieldset>
    <fieldset>
      <legend>Contacts</legend>
      <For each={contacts}>
        <Contact onSelect={toggle} />
      </For>
    </fieldset>
    <div className="control submit">
      <input type="submit" value="Start Team Chat" disabled={disabled} />
    </div>
  </form>
);
