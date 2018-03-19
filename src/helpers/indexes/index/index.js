import * as conversations from 'helpers/conversations';
import group from 'helpers/indexes/group';

export default (indexes, record, index) => {
  const { aliases } = indexes;
  const { id, type, transcript = [{}] } = record;
  const { groups } = transcript.reduce(conversations.get(record), {
    groups: new Set(),
    aliases,
  });

  return Object.assign(indexes, {
    id: Object.assign(indexes.id, {
      [id]: index,
    }),
    type: group(indexes)
      .at('type')
      .using({ key: type, value: index }),
    conversations: group(indexes)
      .at('conversations')
      .using({ key: JSON.stringify(Array.from(groups).sort()), value: index }),
  });
};
