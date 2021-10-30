import { useDispatch } from 'react-redux';
import { login } from '../redux/user/user.action';
import { Login } from '../page/login';

export const LoginContainer = () => {
  const dispatch = useDispatch();

  const onLogin = (user, token) => dispatch(login(user, token));

  return <Login onLogin={onLogin} />;
};
