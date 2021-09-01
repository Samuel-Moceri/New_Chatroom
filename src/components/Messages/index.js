import './style.scss';
import Message from 'src/components/Message';

const Messages = () => (
  <section className="messages">
    <Message author="Moi" text="coucou"/>
    <Message author="Toi" text="coucou"/>
    <Message author="Moi" text="ca va ?"/>
    <Message author="Toi" text="bien et toi ?"/>
    <Message author="Moi" text="tranquille"/>
    <Message author="Toi" text="React"/>
  </section>
);

export default Messages;
