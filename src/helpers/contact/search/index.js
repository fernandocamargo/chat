export default ({ query }) => ({ id, alias }) => {
  const pattern = new RegExp(query, 'i');

  return id.match(pattern) || alias.match(pattern);
};
