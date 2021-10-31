import { Route, Switch, useLocation } from 'react-router-dom';
import { LoginContainer } from '../container/user/login.container';
import '../scss/main.scss';
import { Footer } from '../component/common/footer';
import { Join } from '../page/user/join';
import { JoinSuccess } from '../page/user/join-success';
import { Index } from '../page';
import { WebtoonContainer } from '../container/webtoon/webtoon.container';

export const Main = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  return (
    <main className={pathname ? '' : 'main-index'}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" exact component={Join} />
        <Route path="/join-success" component={JoinSuccess} />
        <Route path="/webtoon/:id" component={WebtoonContainer} />
      </Switch>
      <Footer />
    </main>
  );
};
