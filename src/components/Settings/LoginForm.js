import Input from './Input';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
    // axios.post('http://localhost:3001/login', {
    //   email: 'bouclierman@herocorp.io',
    //   password: 'jennifer',
    // })
    //   .then((response) => {
    //     console.log('succès', response);
    //     // ici on pourra modifier le state avec le pseudo
    //   })
    //   .catch((error) => {
    //     console.log('erreur', error);
    //   });
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
// un middleware pour Redux est une fonction qui sera capable de faire qqch
// en voyant passer une action
// on doit écrire une fonction qui retourne une fonction qui retourne une fonction
// parce que Redux va l'utiliser ainsi, il fait ce qu'on appelle du currying
// dans la fonction qu'on écrit on aura accès à 3 choses :
// le store : cette entité gardienne du state et donc ses méthodes dispatch, getState
// next : ???
// action: l'action qui été dispatchée

const debugMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action); // je laisse passer l'action - je dis que j'ai fini de travailler
};

export default debugMiddleware;
