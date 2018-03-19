import * as date from 'helpers/date';
import clone from 'helpers/object/clone';
import replace from 'helpers/array/replace';

export const group = (stack, message) => {
  const { created_at, transcript } = message;
  const day = date.short(created_at);
  const index = stack.dates[day];
  const parent = stack.messages[index];
  const exists = !!parent;
  const messages = !exists
    ? stack.messages.concat(message)
    : replace(
        stack.messages,
        index,
        clone(parent, { transcript: parent.transcript.concat(transcript) }),
      );
  const dates = exists
    ? stack.dates
    : clone(stack.dates, { [day]: stack.messages.length });

  return Object.assign(stack, { messages, dates });
};

export default messages =>
  messages.reduce(group, {
    messages: [],
    dates: {},
  }).messages;
