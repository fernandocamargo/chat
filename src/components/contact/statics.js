import { string, func, bool } from 'prop-types';

export const displayName = 'Contact';

export const propTypes = {
  id: string.isRequired,
  alias: string.isRequired,
  onSelect: func.isRequired,
  checked: bool.isRequired,
};

export const defaultProps = {
  checked: false,
};
