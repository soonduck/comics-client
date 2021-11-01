export const Info = () => {
  const disableAccount = () => {};
  return (
    <section className="wrap">
      <h2>soonduck(닉네임)님의 계정정보</h2>
      <div className="wrap-my-info">
        <div className="my-id-info">
          <span>아이디</span>
          <span>mari301509</span>
        </div>
        <div className="my-nickname-info">
          <span>닉네임</span>
          <span>soonduck</span>
        </div>
      </div>
      <button className="btn-set-profile">프로필 설정</button>
      <div className="set-profile-desc">
        카카오페이지 닉네임과 프로필 사진을 설정합니다.
      </div>
      <button
        className="btn-disable-account"
        type="button"
        onClick={disableAccount}
      >
        서비스 탈퇴
      </button>
      <div className="disable-account-desc">순덕페이지를 탈퇴합니다.</div>
    </section>
  );
};
