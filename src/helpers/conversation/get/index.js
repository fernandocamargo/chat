import * as contact from 'helpers/contact';

export default props => contacts => ({
  participants: JSON.parse(contacts).map(contact.get(props)),
  id: contacts,
});
