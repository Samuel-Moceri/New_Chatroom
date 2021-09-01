import PropTypes from 'prop-types';

import './style.scss';

const Message = () => (
  <article className="message">
    <p className="message-author">Auteur</p>
    <p className="message-content">Bla bla bla</p>
  </article>
);

Message.propTypes = {

};

export default Message;
