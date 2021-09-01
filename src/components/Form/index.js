import { useSelector, useDispatch } from 'react-redux';
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

  return (
    <form className="form">
      <input
        onChange={handleChange}
        className="form-input"
        type="text"
        value={messageInProgress}
      />
      <button className="form-btn" type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
