import { useState } from 'react';
import api from '../lib/api';
import Cookies from 'universal-cookie/lib';

export const Login = ({ onLogin, token }) => {
  const [loginInput, setLoginInput] = useState({ userId: '', password: '' });

  const onClick = () => {
    api.post('user/login', loginInput).then((res) => {
      const cookies = new Cookies();
      onLogin({ token: cookies.get('x-jwt') });
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
      <span>아직 회원이 아니신가요?</span>
      <button type="button" onClick={onClick}>
        로그인
      </button>
    </form>
  );
};
