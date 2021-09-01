import { useSelector } from 'react-redux';
import './style.scss';

const Form = () => {
  const messageInProgress = useSelector((state) => state.messageInProgress);

  return (
    <form className="form">
      <input className="form-input" type="text" value={messageInProgress} />
      <button className="form-btn" type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
