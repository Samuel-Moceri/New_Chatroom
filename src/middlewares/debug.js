// un middleware pour Redux est une fonction qui sera capable de faire qqch
// en voyant passer une action
// on doit écrire une fonction qui retourne une fonction qui retourne une fonction
// parce que Redux va l'utiliser ainsi, il fait ce qu'on appelle du currying
// dans la fonction qu'on écrit on aura accès à 3 choses :
// le store : cette entité gardienne du state et donc ses méthodes dispatch, getState
// next : c'est la fonction à appeler pour passer l'action au prochain traducteur : 
//        au prochain middleware / au reducer s'il ne reste plus de middleware
// action: l'action qui été dispatchée

const debugMiddleware = (store) => (next) => (action) => {
  console.log(action);
  if (action.type === 'LOGIN') {
    console.log('je vais peut etre faire qqch pour Login');
  }
  next(action); // je laisse passer l'action - je dis que j'ai fini de travailler
};

export default debugMiddleware;
