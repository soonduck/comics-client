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
  const [oversize, setOversize] = useState(false);

  // 3MB 사이즈
  const maxSize = 3 * 1024 * 1024;
  // 프로필 사진은 작아도 될듯...
  // 이유: 서버에서 용량 줄이기 아직 할 줄 모른다!!!

  const onChangeUsername = ({ target }) => {
    setUsername(target.value);
  };

  const editMyInfo = () => {
    if (upload) {
      const formData = new FormData();
      formData.append('file', upload);

      api.post('user/picUpload', formData).then((res) => {
        console.log(res);
      });
    }
    api.post('user/edit-info', { username }).then((res) => {
      console.log(res);
    });
  };

  const setPreview = (event) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      setPic(event.target.result);
    };
    if (event.target.files[0] && event.target.files[0].size < maxSize) {
      setOversize(false);
      reader.readAsDataURL(event.target.files[0]);
      setUpload(event.target.files[0]);
    } else if (event.target.files[0] && event.target.files[0].size > maxSize) {
      setOversize(true);
      setPic('');
      setUpload('');
    } else if (!event.target.files[0]) {
      setOversize(false);
      setPic('');
      setUpload('');
    }
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
        {oversize ? (
          <div className="notice-oversize">
            파일용량은 5MB를 넘을 수 없습니다.
          </div>
        ) : (
          ''
        )}
        <label htmlFor="setMyProfilePic">
          <i className="fa-solid fa-camera-retro"></i>
        </label>
        <input
          type="file"
          className="a11yHidden"
          id="setMyProfilePic"
          onChange={setPreview}
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
        <button
          type="button"
          disabled={username === user.username && !upload}
          onClick={editMyInfo}
        >
          저장
        </button>
      </form>
    </section>
  );
};
