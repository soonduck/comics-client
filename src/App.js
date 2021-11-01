import { Router, useLocation } from 'react-router-dom';
import history from './lib/history';
import { Main } from './router/main';
import { HeaderContainer } from './container/common/header.container';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie/lib';
import { login } from './redux/user/user.action';
import { useDispatch } from 'react-redux';
import api from './lib/api';

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
