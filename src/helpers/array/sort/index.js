export default property => (previous, next) =>
  previous[property] - next[property];
