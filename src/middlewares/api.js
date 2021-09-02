import axios from 'axios';

const APIMiddleware = (store) => (next) => (action) => {
  // attention dans un middleware on ne peut pas utiliser de hooks useEffect, useSelector, useQQCH
  // parce les hooks ne sont utilisables que dans les composants
  if (action.type === 'LOGIN') { // quand login passe
    const state = store.getState(); // j'ai accès au store dans les middlewares donc au state
    axios.post('http://localhost:3001/login', { // je fais l'appel api
      email: state.userEmail,
      password: state.userPassword,
    })
      .then((response) => {
        console.log('succès', response.data.pseudo);
        // TODO : ici il faudra aller mettre le pseudo dans le state
        // challenge : réfléchir à comment on pourrait faire
      })
      .catch((error) => {
        alert('Mauvais identifiant / mot de passe');
        console.error(error);
      });
  }
  next(action); // dans tous les cas je laisse passer l'action
};

export default APIMiddleware;
