import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

const Form = () => {
  const messageInProgress = useSelector((state) => state.messageInProgress);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({
      type: 'CHANGE_MESSAGE',
    });
  };

  return (
    <form className="form">
      <input onChange={handleChange} className="form-input" type="text" value={messageInProgress} />
      <button className="form-btn" type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
