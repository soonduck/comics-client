import { Router, useLocation } from 'react-router-dom';
import history from './lib/history';
import { Main } from './router/main';
import { HeaderContainer } from './container/common/header.container';
import { useState } from 'react';
import './scss/main.scss';
import { Footer } from './component/common/footer';

function App() {
  return (
    <>
      <Router history={history}>
        <HeaderContainer />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
