const initialState = {
  listOfMessages: [
    {
      id: 1,
      author: 'Super Chat',
      message: 'Coucou',
    },
    {
      id: 2,
      author: 'Super Chat',
      message: 'T\'as pas des super-croquettes ?',
    },
  ],
  messageInProgress: '',
  loginOpen: true,
  userPassword: '', // on pourrait s'abstenir de mettr la valeur initiale pour nos champs controlés
  userEmail: '',
  pseudo: 'Utilisateur anonyme',
  logged: false,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        messageInProgress: action.newMessage,
      };
    case 'SEND_MESSAGE':
      // on respecte le principe d'immutability : on n'altère pas de valeur on en crée des nouvelles
      // grace à ça mes outils vont pouvoir voir qu'il y eu des changements
      // entre l'ancien le nouveau state et réagir
      return { // mon nouveau state
        ...state, // contient ce qu'il y avait déjà
        messageInProgress: '', // + un message vide
        listOfMessages: [ // + une liste de messages
          ...state.listOfMessages, // contenant les messages actuels
          { // + 1 nouveau
            id: Math.random(),
            author: state.pseudo,
            message: state.messageInProgress,
          },
        ],
      };

    case 'TOGGLE_OPEN':
      return {
        ...state,
        loginOpen: !state.loginOpen,
      };

    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue, // avec des [] on peut mettre un nom de propriété dynamique
      };

    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
        pseudo: action.pseudo,
        loading: false,
        userEmail: '',
        userPassword: '',
      };

    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };

    case 'LOGOUT':
      return {
        ...state, 
        logged: false,
        pseudo: 'Utilisateur anonyme',
      };

    case 'LOGIN_ERROR':
      return{
        ...state,
        loading: false,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
