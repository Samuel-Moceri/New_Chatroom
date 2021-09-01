// == Import
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
