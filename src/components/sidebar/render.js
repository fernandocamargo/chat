import React from 'react';
import classnames from 'classnames';

import Brand from 'components/brand';
import Conversations from 'components/conversations';
import Contacts from 'components/contacts';
import Menu from 'components/menu';

import './styles.css';

export default ({ feature, contacts, conversations, enter, show }) => (
  <aside className={classnames('sidebar', feature)}>
    <Brand />
    <div className="container">
      <Conversations conversations={conversations} onSelect={enter} />
      <Contacts contacts={contacts} onSelect={enter} />
    </div>
    <Menu onSelect={show} />
  </aside>
);
