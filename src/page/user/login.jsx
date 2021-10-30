import { useEffect, useState } from 'react';
import api from '../../lib/api';
import Cookies from 'universal-cookie/lib';
import { Link, useHistory } from 'react-router-dom';

export const Login = ({ onLogin, token }) => {
  // states
  const [loginInput, setLoginInput] = useState({ userId: '', password: '' });

  //variables
  const history = useHistory();
  if (token) history.push('/');

  //functions
  const onClick = () => {
    api.post('user/login', loginInput).then((res) => {
      const cookies = new Cookies();
      onLogin({ token: cookies.get('x-jwt') });
    });
    history.push('/');
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
      <Link to="/join">아직 회원이 아니신가요?</Link>
      <button type="button" onClick={onClick}>
        로그인
      </button>
    </form>
  );
};
