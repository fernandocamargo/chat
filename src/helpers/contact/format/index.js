export default ({ selected }) => ({ id, ...contact }) => ({
  key: id,
  checked: !!~selected.indexOf(id),
  id,
  ...contact,
});
