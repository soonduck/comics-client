import { Route, Switch } from 'react-router-dom';
import { LoginContainer } from '../container/user/login.container';
import '../scss/main.scss';
import { Footer } from '../component/common/footer';
import { Join } from '../page/user/join';
import { JoinSuccess } from '../page/user/join-success';

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" exact component={Join} />
        <Route path="/join-success" component={JoinSuccess} />
      </Switch>
      <Footer />
    </main>
  );
};
