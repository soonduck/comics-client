import { Route, Switch } from 'react-router-dom';
import { LoginContainer } from '../container/user/login.container';
import '../scss/main.scss';
import { Footer } from '../component/common/footer';
import { Join } from '../page/join';

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" component={Join} />
      </Switch>
      <Footer />
    </main>
  );
};
