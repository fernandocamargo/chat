import * as messages from 'helpers/messages';
import sort from 'helpers/array/sort';

export default ({ getMessages, match: { params: { contacts } } }) => ({
  messages: messages.group(getMessages(contacts)).sort(sort('created_at')),
});
