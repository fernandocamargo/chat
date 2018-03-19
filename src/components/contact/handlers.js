export default {
  change: ({ onSelect }) => ({ target: { value, checked } }) =>
    onSelect({ value, checked }),
};
