export default indexes => ({
  at: type => ({
    using: ({ key, value }) => {
      const index = indexes[type];
      const current = index[key];
      const next = current ? current.concat(value) : [value];

      return Object.assign(index, { [key]: next });
    },
  }),
});
