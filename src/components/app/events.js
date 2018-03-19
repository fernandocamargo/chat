import * as indexes from 'helpers/indexes';
import records from 'data/initial.json';

import initial from './initial-state';

export default {
  componentDidMount() {
    const { props: { register, index } } = this;

    register({ records });
    index({ indexes: indexes.get(records, initial().indexes) });
  },
};
