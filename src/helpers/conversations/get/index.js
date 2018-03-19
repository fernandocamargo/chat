export default ({ requested_by }) => (stack, { id, alias }) => {
  const { groups, aliases } = stack;
  const identity = id || requested_by;

  return Object.assign(stack, {
    groups: groups.add(identity),
    aliases: Object.assign(aliases, {
      [identity]: aliases[identity] || alias,
    }),
  });
};
