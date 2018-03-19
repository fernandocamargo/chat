import ensure from 'helpers/array/ensure';

export const conversation = ids =>
  `/conversation/${JSON.stringify(ensure(ids).sort())}`;
