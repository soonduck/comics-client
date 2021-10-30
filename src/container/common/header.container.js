import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/user.action';
import { Header } from '../../component/common/header';

export const HeaderContainer = () => {
  const { token } = useSelector((state) => ({
    token: state?.userReducer.token,
  }));
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return <Header token={token} onLogout={onLogout} />;
};
