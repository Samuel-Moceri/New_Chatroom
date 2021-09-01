const initialState = {
  listOfMessages: [],
  messageInProgress: 'test',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        messageInProgress: 'Truc bidon',
      };
    default:
      return state;
  }
};

export default reducer;
