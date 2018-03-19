import update from 'immutability-helper';

export const register = state => ({ records }) =>
  update(state, {
    records: { $set: records },
  });

export const index = state => ({ indexes }) =>
  update(state, {
    indexes: { $set: indexes },
  });

export const show = state => ({ feature }) =>
  update(state, {
    feature: { $set: feature },
  });
