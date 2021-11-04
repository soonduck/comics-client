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

      if (cookies.get('x-jwt')) {
        onLogin(cookies.get('x-jwt'));
        history.push('/');
        document.location.reload();
      }
      if (!res.data.ok) setLoginFail(true);
    });
  };

  return (
    <form className="login-form wrap flex">
      <div className="flex">
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
      </div>
      {loginFail ? (
        <div className="login-fail">로그인에 실패했습니다.</div>
      ) : (
        ''
      )}
      <div className="flex">
        <Link to="/join" className="link-join">
          아직 회원이 아니신가요?
        </Link>
        <button
          type="button"
          onClick={onClick}
          className="btn-submit-login bold"
        >
          로그인
        </button>
      </div>
    </form>
  );
};
