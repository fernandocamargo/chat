export default (collection, at, value) =>
  Array.from(
    Object.assign(collection, {
      [at]: value,
    }),
  );

