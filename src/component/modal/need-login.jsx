export const NeedLogin = ({ setLogin }) => {
  return (
    <div className="modal-need-login">
      로그인이 필요한 서비스입니다.
      <div className="buttons-login">
        <button
          type="button"
          onClick={() => {
            setLogin(false);
          }}
        >
          취소
        </button>
        <button>로그인</button>
      </div>
    </div>
  );
};
