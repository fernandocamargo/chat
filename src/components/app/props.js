import { cloneElement } from 'react';

import * as contact from 'helpers/contact';
import * as conversation from 'helpers/conversation';
import * as messages from 'helpers/messages';
import * as routes from 'routes';

export const contacts = props => {
  const { indexes: { aliases } } = props;

  return Object.keys(aliases)
    .sort()
    .map(contact.get(props));
};

export const conversations = props => {
  const { indexes: { conversations } } = props;

  return Object.keys(conversations)
    .sort()
    .map(conversation.get(props));
};

export const enter = ({ history }) => contacts =>
  history.push(routes.conversation(contacts));

/*
export const children = ({ children, records, indexes: { conversations } }) =>
  cloneElement(children, {
    getMessages: contacts => {
      const conversation = conversations[contacts];

      return conversation && conversation.map(id => records[id]);
    },
  });
*/

export const children = props => {
  const { children } = props;

  return cloneElement(children, {
    getMessages: messages.get(props),
  });
};

export default props => ({
  contacts: contacts(props),
  conversations: conversations(props),
  enter: enter(props),
  children: children(props),
});
