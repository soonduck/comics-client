import { Route, Switch, useLocation } from 'react-router-dom';
import { LoginContainer } from '../container/user/login.container';
import '../scss/main.scss';
import { Footer } from '../component/common/footer';
import { Join } from '../page/user/join';
import { JoinSuccess } from '../page/user/join-success';
import { Index } from '../page';
import { WebtoonContainer } from '../container/webtoon/webtoon.container';
import constants from '../lib/constants';
import { ViewerContainer } from '../container/webtoon/viewer.container';
import { InfoContainer } from '../container/user/info.container';
import { ChargeCoin } from '../page/user/charge-coin';
import { Info } from '../page/user/info';
import { useEffect } from 'react';

export const Main = ({ setDropdown }) => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const mainClass = constants.mainClass[pathname];

  useEffect(() => {
    setDropdown(false);
  }, [pathname]);

  return (
    <main className={mainClass ? mainClass : pathname ? '' : 'main-index'}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" exact component={Join} />
        <Route path="/join-success" component={JoinSuccess} />
        <Route path="/charge" component={ChargeCoin} />
        <Route path="/webtoon-info" component={InfoContainer} />
        <Route path="/my-info" component={Info} />
        <Route path="/webtoon/:id" component={WebtoonContainer} />
        <Route path="/view/episode/:id" component={ViewerContainer} />
      </Switch>
      <Footer />
    </main>
  );
};
