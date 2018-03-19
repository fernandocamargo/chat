export default ({ indexes: { aliases } }) => alias => ({
  id: alias,
  alias: aliases[alias],
});
