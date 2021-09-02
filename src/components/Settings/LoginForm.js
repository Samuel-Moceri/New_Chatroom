const LoginForm = () => (
  <form className="settings-form">
    <input placeholder="Email" aria-label="Email" className="settings-input" type="email" />
    <input placeholder="Mot de passe" aria-label="Mot de passe" className="settings-input" type="password" />
    <button className="settings-btn" type="submit">Se connecter</button>
  </form>
);

export default LoginForm;
