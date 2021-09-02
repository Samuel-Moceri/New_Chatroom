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
  userEmail: '',
  userPassword: '',
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
            author: 'Super Chat',
            message: state.messageInProgress,
          },
        ],
      };
    case 'TOGGLE_OPEN':
      return {
        ...state,
        loginOpen: !state.loginOpen,
      };

    case 'CHANGE_EMAIL_VALUE':
      return {
        ...state,
        userEmail: action.newValue,
      };

    case 'CHANGE_PASSWORD_VALUE':
      return {
        ...state,
        userPassword: action.newValue,
      };

    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue, // avec des [] on peut mettre un nom de propriété dynamique
      };

    default:
      return state;
  }
};

export default reducer;
