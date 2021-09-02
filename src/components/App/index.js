// == Import
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';

import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
