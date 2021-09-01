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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageInProgress.trim().length > 0) {
      dispatch({
        type: 'SEND_MESSAGE',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        className="form-input"
        type="text"
        value={messageInProgress}
        placeholder="Saisissez votre message"
        aria-label="Message"
      />
      <button aria-label="Envoyer" className="form-btn" type="submit">
        <Send />
      </button>
    </form>
  );
};

export default Form;
