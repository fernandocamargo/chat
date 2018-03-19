import { compose, withStateHandlers, lifecycle, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';

import state from './initial-state';
import * as reducers from './reducers';
import events from './events';
import props from './props';

export default compose(
  withRouter,
  withStateHandlers(state, reducers),
  lifecycle(events),
  withProps(props),
);
