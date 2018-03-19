import * as message from 'helpers/message';

export default props => contacts => {
  const { indexes: { conversations } } = props;
  const conversation = conversations[contacts] || [];

  return conversation.map(message.get(props));
};
