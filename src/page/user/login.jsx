import { useEffect, useState } from 'react';
import api from '../../lib/api';
import Cookies from 'universal-cookie/lib';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../redux/user/user.action';

export const Login = ({ onLogin, token }) => {
  // states
  const [loginInput, setLoginInput] = useState({ userId: '', password: '' });
  const [loginFail, setLoginFail] = useState(false);

  //variables
  const history = useHistory();
  if (token) history.push('/');

  //functions
  const onClick = () => {
    api.post('user/login', loginInput).then((res) => {
      const cookies = new Cookies();
      onLogin(cookies.get('x-jwt'));
      if (cookies.get('x-jwt')) history.push('/');
      if (!res.data.ok) setLoginFail(true);
    });
  };

  return (
    <form className="login-form">
      <input
        type="text"
        value={loginInput.userId}
        onChange={({ target }) =>
          setLoginInput({ ...loginInput, userId: target.value })
        }
      />
      <input
        type="password"
        value={loginInput.password}
        onChange={({ target }) =>
          setLoginInput({ ...loginInput, password: target.value })
        }
      />
      {loginFail ? <div>로그인에 실패했습니다</div> : ''}
      <div>
        <Link to="/join">아직 회원이 아니신가요?</Link>
        <button type="button" onClick={onClick}>
          로그인
        </button>
      </div>
    </form>
  );
};
