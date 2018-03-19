import * as url from 'helpers/url';

export const click = ({ onSelect }) => event => {
  const { target: { href } } = event;
  const { hash } = url.parse(href);
  const feature = hash.replace(/[^\w\s]/gi, '');

  event.preventDefault();
  onSelect({ feature });
};
