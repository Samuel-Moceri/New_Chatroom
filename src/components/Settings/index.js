import { X } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import LoginForm from './LoginForm';

const Settings = () => {
  const isOpen = useSelector((state) => state.loginOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_OPEN',
    });
  };

  return (
    <div className="settings">
      <button onClick={handleClick} className="settings-toggler" type="button" aria-label="Ouvrir/Fermer">
        <X size="100%" />
      </button>
      {isOpen && <LoginForm />}
    </div>
  );
};

export default Settings;
