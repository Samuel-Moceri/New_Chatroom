let socket;

const websocketMiddleware = (store) => (next) => (action) => {
  if (action.type === 'WEBSOCKET_INIT') {
    // ça je veux le faire le plus tot possible pour établir la connexion au serveur de websocket
    socket = window.io('http://localhost:3001');
    // tout de suite après je pose un écouteur pour entendre chaque fois
    // que le serveur me relaie un message
    socket.on('send_message', (data) => {
      // quand je reçois un message je vais en faire qqch ->
      // l'afficher dans l'interface donc je vais vouloir modifier le state
      console.log('le serveur a relayé des infos', data);
    });
  }
  else if (action.type === 'SEND_MESSAGE') {
    // quand l'utilisateur a l'intention d'envoyer (au submit du form),
    // j'envoie un message au serveur
    const state = store.getState();
    socket.emit('send_message', {
      author: state.pseudo,
      message: state.messageInProgress,
    });
  }
  next(action);
};

export default websocketMiddleware;
