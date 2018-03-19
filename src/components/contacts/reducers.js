import update from 'immutability-helper';

import initial from './initial-state';

export const search = state => ({ query }) =>
  update(state, {
    query: { $set: query },
  });

export const select = state => ({ value }) =>
  update(state, {
    selected: { $push: [value] },
  });

export const deselect = state => ({ index }) =>
  update(state, {
    selected: { $splice: [[index, 1]] },
  });

export const clear = () => () => initial();
