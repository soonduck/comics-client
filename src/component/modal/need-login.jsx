import history from '../../lib/history';

export const NeedLogin = ({ setLogin, viewer }) => {
  const goBack = () => {
    if (viewer) history.goBack();
    setLogin(false);
  };
  return (
    <>
      <div className="modal-need-login">
        로그인이 필요한 서비스입니다.
        <div className="buttons-login">
          <button type="button" onClick={goBack}>
            취소
          </button>
          <button onClick={() => history.push('/login')}>로그인</button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
