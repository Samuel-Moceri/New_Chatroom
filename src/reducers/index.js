const initialState = {
  listOfMessages: [{
    id: 1,
    author: 'salut',
    message: 'coucou',
  },
],
  messageInProgress: "il n'y a rien ici",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        messageInProgress: action.newMessage,
      };
    default:
      return state;
  }
};

export default reducer;
