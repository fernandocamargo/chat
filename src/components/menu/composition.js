import { compose, withHandlers } from 'recompose';

import * as handlers from './handlers';

export default compose(withHandlers(handlers));
