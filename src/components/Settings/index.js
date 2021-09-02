import { X } from 'react-feather';
import { useSelector } from 'react-redux';

import './style.scss';
import LoginForm from './LoginForm';

const Settings = () => {
  const isOpen = useSelector((state) => state.loginOpen);
  // console.log(isOpen);
  return (
    <div className="settings">
      <button className="settings-toggler" type="button" aria-label="Ouvrir/Fermer">
        <X size="100%" />
      </button>
      {isOpen && <LoginForm />}
    </div>
  );
};

export default Settings;
