export const submit = ({ onSelect, selected, clear }) => event => {
  event.preventDefault();
  onSelect(selected);
  clear();
};

export const filter = ({ search }) => ({ target: { value: query } }) =>
  search({ query });
