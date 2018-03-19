import property from 'helpers/object/property';

export default ({ id, participants }) => ({
  participants: participants.map(property('alias')).join(', '),
  id: JSON.parse(id),
});
