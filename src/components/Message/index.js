import PropTypes from 'prop-types';

import './style.scss';

const Message = ({ author, text }) => (
  <article className="message">
    <p className="message-author">{author}</p>
    <pre className="message-content">{text}</pre>
  </article>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
