import { Route, Switch, useLocation } from 'react-router-dom';
import { LoginContainer } from '../container/user/login.container';
// import '../scss/main.scss';
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
import { useDispatch } from 'react-redux';
import { login, myInfo } from '../redux/user/user.action';
import Cookies from 'universal-cookie/lib';
import api from '../lib/api';
import { EditMyInfo } from '../page/user/edit-my-info';
import { RegisterContainer } from '../container/webtoon/register.container';
import { MyWebtoon } from '../page/webtoon/my-webtoon';
import { UploadEpisode } from '../page/webtoon/upload-episode';

export const Main = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const dispatch = useDispatch();
  const onMyInfo = (user) => dispatch(myInfo(user));
  const onLogin = (token) => dispatch(login(token));

  useEffect(() => {
    const cookies = new Cookies();

    try {
      api.get('user/my-info').then((res) => {
        onLogin(cookies.get('x-jwt') || '');
        onMyInfo(res.data);
      });
    } catch (error) {
      cookies.remove('x-jwt');
    }
  }, [pathname]);

  return (
    <main
      className={
        pathname ? (pathname === 'view' ? 'main-view' : '') : ' main-index'
      }
    >
      <Switch>
        <Route path="/" exact component={() => <Index />} />
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/join" exact component={Join} />
        <Route path="/join-success" exact component={JoinSuccess} />
        <Route path="/charge" exact component={ChargeCoin} />
        <Route path="/webtoon-info" exact component={InfoContainer} />
        <Route path="/my-info" exact component={Info} />
        <Route path="/edit-my-info" exact component={EditMyInfo} />
        <Route path="/webtoon/register" exact component={RegisterContainer} />
        <Route
          path="/webtoon/upload-episode/:webtoonId"
          exact
          component={UploadEpisode}
        />
        <Route path="/webtoon/:id" exact component={WebtoonContainer} />
        <Route path="/my-webtoon/:id" exact component={MyWebtoon} />
        <Route path="/view/episode/:id" exact component={ViewerContainer} />
      </Switch>
    </main>
  );
};
