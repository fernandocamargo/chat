import * as locale from 'helpers/locale';

export default timestamp =>
  new Date(timestamp).toLocaleDateString(locale.get(), {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
