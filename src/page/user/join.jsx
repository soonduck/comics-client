import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from '../../lib/api';
import { useState } from 'react';

export const Join = () => {
  const [joinInput, setJoinInput] = useState({
    userId: '',
    username: '',
    password: '',
  });
  const [joinError, setJoinError] = useState('');

  const { token } = useSelector((state) => ({
    token: state?.userReducer.token,
  }));

  const history = useHistory();
  if (token) history.push('/');

  const joinIn = () => {
    api.post('user/create', joinInput).then((res) => {
      if (res.data.ok) history.push('/join-success');
      else setJoinError(res.data.error);
    });
  };
  return (
    <form className="wrap-join">
      <h3>아이디</h3>
      <label htmlFor="userId">
        <input
          type="text"
          id="userId"
          value={joinInput.userId}
          onChange={({ target }) =>
            setJoinInput({ ...joinInput, userId: target.value })
          }
        />
        <span className="error-join">
          {joinError.includes('아이디') ? joinError : ''}
        </span>
      </label>
      <h3>닉네임</h3>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          value={joinInput.username}
          onChange={({ target }) =>
            setJoinInput({ ...joinInput, username: target.value })
          }
        />
      </label>
      <span className="error-join">
        {joinError.includes('닉네임') ? joinError : ''}
      </span>
      <h3>비밀번호</h3>
      <label htmlFor="password">
        <input
          type="text"
          id="password"
          value={joinInput.password}
          onChange={({ target }) =>
            setJoinInput({ ...joinInput, password: target.value })
          }
        />
      </label>
      <div className="join-buttons">
        <button
          type="button"
          onClick={() => {
            history.push('/');
          }}
        >
          취소
        </button>
        <button type="button" onClick={joinIn}>
          가입
        </button>
      </div>
    </form>
  );
};
