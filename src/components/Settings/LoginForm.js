import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const emailValue = useSelector((state) => state.userEmail);
  const passwordValue = useSelector((state) => state.userPassword);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    // console.log('je veux changer la valeur du champs email');
    dispatch({
      type: 'CHANGE_VALUE',
      key: 'userEmail',
      newValue: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    // console.log('je veux changer la valeur du champs email');
    dispatch({
      type: 'CHANGE_VALUE',
      key: 'userPassword',
      newValue: event.target.value,
    });
  };

  return (
    <form className="settings-form">
      <input
        value={emailValue}
        onChange={handleEmailChange}
        placeholder="Email"
        aria-label="Email"
        className="settings-input"
        type="email"
      />
      <input
        value={passwordValue}
        onChange={handlePasswordChange}
        placeholder="Mot de passe"
        aria-label="Mot de passe"
        className="settings-input"
        type="password"
      />
      <input type="text" placeholder="Prénom" />
      <input type="text" placeholder="Nom" />
      <input type="text" placeholder="Ville" />
      <button className="settings-btn" type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
