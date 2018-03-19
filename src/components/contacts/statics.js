import { arrayOf, shape, any, func } from 'prop-types';

import { propTypes as contact } from 'components/contact/statics';

export const displayName = 'Contacts';

export const propTypes = {
  contacts: arrayOf(shape({ ...contact, onSelect: any })).isRequired,
  onSelect: func.isRequired,
};

export const defaultProps = {
  contacts: [],
};
