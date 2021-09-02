import { useSelector, useDispatch } from 'react-redux';
import { Send } from 'react-feather';
import './style.scss';

const Form = () => {
  const messageInProgress = useSelector((state) => state.messageInProgress);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_MESSAGE',
      newMessage: event.target.value,
    });
  };

  const sendMessage = () => {
    if (messageInProgress.trim().length > 0) {
      dispatch({
        type: 'SEND_MESSAGE',
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyup = (event) => {
    if (event.code === 'Enter' && !event.shiftKey) {
      sendMessage();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* <input onChange={handleChange} className="form-input" type="text" value={messageInProgress} /> */}
      <textarea
        onChange={handleChange}
        className="form-input"
        type="text"
        value={messageInProgress}
        onKeyUp={handleKeyup}
        placeholder="Saisissez votre message"
        aria-label="Votre message"
      />
      <button aria-label="Envoyer" className="form-btn" type="submit">
        <Send color="#13405d" />
      </button>
    </form>
  );
};

export default Form;
