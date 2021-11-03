import { useSelector } from 'react-redux';
import history from '../../lib/history';

export const Info = () => {
  const { user } = useSelector((state) => ({
    user: state?.userReducer.user,
  }));

  const disableAccount = () => {};
  return (
    <section className="wrap section-my-info flex">
      <h2>
        <span className="bold">{user.username}</span>님의 계정정보
      </h2>
      <div className="container-profile-pic">
        <img src={user.pic} alt="" className="profile-pic" />
      </div>
      <div className="wrap-my-info">
        <div className="my-id-info">
          <span>아이디</span>
          <span>{user.userId}</span>
        </div>
        <div className="my-nickname-info">
          <span>닉네임</span>
          <span>{user.username}</span>
        </div>
      </div>
      <button
        className="btn-set-profile bold"
        onClick={() => {
          history.push('/edit-my-info');
        }}
      >
        프로필 설정
      </button>
      <div className="set-profile-desc">
        순덕페이지 닉네임과 프로필 사진을 설정합니다.
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
