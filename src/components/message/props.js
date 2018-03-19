import * as date from 'helpers/date';
import sort from 'helpers/array/sort';

export default ({ created_at, transcript = [] }) => ({
  date: date.full(created_at),
  interactions: transcript.sort(sort('date')),
});
