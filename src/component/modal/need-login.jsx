import history from '../../lib/history';

export const NeedLogin = ({ setLogin, viewer }) => {
  const goBack = () => {
    if (viewer) history.goBack();
    setLogin(false);
  };
  console.log('login!!');
  return (
    <>
      <div className="modal-need-login flex">
        <h3>로그인이 필요한 서비스입니다.</h3>
        <div className="buttons-login flex">
          <button type="button" onClick={goBack}>
            취소
          </button>
          <button className="bold" onClick={() => history.push('/login')}>
            로그인
          </button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
