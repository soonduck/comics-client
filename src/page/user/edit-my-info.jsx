import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../lib/api';
import history from '../../lib/history';

export const EditMyInfo = () => {
  const { user } = useSelector((state) => ({
    user: state?.userReducer.user,
  }));

  if (!user) history.push('/');

  const [pic, setPic] = useState();
  const [upload, setUpload] = useState();
  const [oversize, setOversize] = useState(false);
  const [username, setUsername] = useState('');

  const [inserting, setInserting] = useState(false);

  // 3MB 사이즈
  const maxSize = 3 * 1024 * 1024;
  // 프로필 사진은 작아도 될듯...
  // 이유: 서버에서 용량 줄이기 아직 할 줄 모른다!!!

  const onChangeUsername = ({ target }) => {
    setUsername(target.value);
  };

  const editMyInfo = async () => {
    if (upload) {
      const formData = new FormData();
      formData.append('file', upload);

      await api.post('user/picUpload', formData).then((res) => {
        console.log(res);
      });
    }
    await api.post('user/edit-info', { username }).then((res) => {
      console.log(res);
    });

    history.push('/my-info');
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
    <section className="wrap edit-profile flex">
      <h2 className="bold">프로필 설정</h2>
      <form className="edit-profile-form flex">
        <label className="relative-label" htmlFor="setMyProfilePic">
          <div className="image-container">
            <img src={pic ? pic : user.pic} alt="" />
          </div>
          <i className="fa-solid fa-camera-retro" />
        </label>
        <input
          type="file"
          className="a11yHidden"
          id="setMyProfilePic"
          onChange={setPreview}
          accept="image/*"
        />
        {oversize ? (
          <div className="notice-oversize">
            파일용량은 5MB를 넘을 수 없습니다.
          </div>
        ) : (
          ''
        )}
        <div className="input-nickname-desc">
          <span>닉네임을 입력해주세요.</span>
          <span>{username.length}/16</span>
        </div>
        <label
          htmlFor="setMyNickname"
          className={'set-nickname-label' + (inserting ? ' inserting' : '')}
        >
          <input
            type="text"
            id="setMyNickname"
            value={username}
            onChange={onChangeUsername}
            maxLength="16"
            onFocus={() => setInserting(true)}
            onBlur={() => setInserting(false)}
          />
          <button type="button" onClick={() => setUsername('')}>
            <i className="fa-solid fa-circle-xmark" />
          </button>
        </label>
        <button
          type="button"
          disabled={(username === user.username || !username) && !upload}
          onClick={editMyInfo}
          className="btn-save-profile"
        >
          저장
        </button>
      </form>
    </section>
  );
};
