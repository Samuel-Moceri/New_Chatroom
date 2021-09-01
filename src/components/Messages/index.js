import { useSelector } from 'react-redux';
import Message from 'src/components/Message';

import './style.scss';

const Messages = () => {
  const messages = useSelector((state) => state.listOfMessages);

  return (
    <section className="messages">
      {messages.map((currentMessage) => (
        <Message
          key={currentMessage.id}
          author={currentMessage.author}
          text={currentMessage.message}
        />
      ))}
    </section>
  );
};

export default Messages;
