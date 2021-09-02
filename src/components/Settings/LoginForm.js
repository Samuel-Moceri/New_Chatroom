import Input from './Input';

const LoginForm = () => (
  <form className="settings-form">
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
    <Input
      type="text"
      placeholder="Prénom"
      inputKey="userPrenom"
    />
    <button className="settings-btn" type="submit">Se connecter</button>
  </form>
);

export default LoginForm;
