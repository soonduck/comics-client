import { useHistory } from 'react-router-dom';

export const Join = () => {
  // const history = useHistory();
  // if (token) history.push('/');
  return (
    <form className="wrap-join">
      <h3>아이디</h3>
      <label htmlFor="userId">
        <input type="text" id="userId" />
      </label>
      <h3>닉네임</h3>
      <label htmlFor="username">
        <input type="text" id="username" />
      </label>
      <h3>비밀번호</h3>
      <label htmlFor="password">
        <input type="text" id="password" />
      </label>
      <div className="join-buttons">
        <button type="button">취소</button>
        <button type="button">가입</button>
      </div>
    </form>
  );
};
