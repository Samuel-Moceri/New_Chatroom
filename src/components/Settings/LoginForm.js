import { useDispatch } from 'react-redux';
import Input from './Input';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <Input
        placeholder="Email"
        aria-label="Email"
        className="settings-input"
        type="email"
        inputKey="userEmail"
      />
      <Input
        placeholder="Mot de passe"
        aria-label="Mot de passe"
        className="settings-input"
        type="password"
        title="Veuillez saisir le bon mot de passe"
        inputKey="userPassword"
      />
      <button className="settings-btn" type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
