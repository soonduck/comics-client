import { Router } from 'react-router-dom';
import history from './lib/history';
import { Main } from './router/main';
import { HeaderContainer } from './container/common/header.container';
import { useState } from 'react';

function App() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <Router history={history}>
        <HeaderContainer dropdown={dropdown} setDropdown={setDropdown} />
        <Main setDropdown={setDropdown} />
      </Router>
    </>
  );
}

export default App;
