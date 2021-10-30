import { Router } from 'react-router-dom';
import history from './lib/history';
import { Main } from './router/main';
import { HeaderContainer } from './container/common/header.container';

function App() {
  return (
    <>
      <Router history={history}>
        <HeaderContainer />
        <Main />
      </Router>
    </>
  );
}

export default App;
