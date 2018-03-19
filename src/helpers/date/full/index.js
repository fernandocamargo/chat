import * as locale from 'helpers/locale';

export default timestamp =>
  new Date(timestamp).toLocaleDateString(locale.get(), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
