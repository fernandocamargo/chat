export default url =>
  Object.assign(document.createElement('a'), {
    href: url,
  });
