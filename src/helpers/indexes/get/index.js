import index from 'helpers/indexes/index/index';

export default (records, indexes) => records.reduce(index, indexes);
