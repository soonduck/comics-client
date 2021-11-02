import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../lib/api';

export const EditMyInfo = () => {
  const { user } = useSelector((state) => ({
    user: state?.userReducer.user,
  }));

  const [pic, setPic] = useState();
  const [username, setUsername] = useState('');
  const [upload, setUpload] = useState();

  const onChangeUsername = ({ target }) => {
    setUsername(target.value);
  };

  const editMyInfo = () => {
    const formData = new FormData();
    formData.append('file', upload);

    api.post('user/picUpload', formData).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    if (user.username) setUsername(user.username);
  }, [user]);

  return (
    <section className="wrap">
      <h2>프로필 설정</h2>
      <form>
        <div id="image_container">
          <img src={pic} alt="" />
        </div>
        <label htmlFor="setMyProfilePic">
          <i className="fa-solid fa-camera-retro"></i>
        </label>
        <input
          type="file"
          className="a11yHidden"
          id="setMyProfilePic"
          onChange={(event) => {
            const reader = new FileReader();
            reader.onload = function (event) {
              setPic(event.target.result);
            };
            setUpload(event.target.files[0]);
            if (event.target.files[0])
              reader.readAsDataURL(event.target.files[0]);
          }}
        />
        <div className="input-nickname-desc">
          <span>닉네임을 입력해주세요.</span>
          <span>{username.length}/16</span>
        </div>
        <label htmlFor="setMyNickname">
          <input
            type="text"
            id="setMyNickname"
            value={username}
            onChange={onChangeUsername}
            maxLength="16"
          />
          <button>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </label>
        <button type="button" onClick={editMyInfo}>
          저장
        </button>
      </form>
    </section>
  );
};
