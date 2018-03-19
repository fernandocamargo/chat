import * as contact from 'helpers/contact';

export const contacts = props => {
  const { contacts } = props;

  return contacts.filter(contact.search(props)).map(contact.format(props));
};

export const toggle = ({ selected, select, deselect }) => ({
  value,
  checked,
}) =>
  checked ? select({ value }) : deselect({ index: selected.indexOf(value) });

export const disabled = ({ selected }) => !selected.length;

export default props => ({
  contacts: contacts(props),
  toggle: toggle(props),
  disabled: disabled(props),
});
