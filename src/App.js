import { LoginContainer } from './container/login.container';
import { Router } from 'react-router-dom';
import history from './lib/history';

function App() {
  return (
    <Router history={history}>
      <LoginContainer />
    </Router>
  );
}

export default App;
