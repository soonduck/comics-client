import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { useLocation } from 'react-router-dom';
import history from '../../lib/history';

export const UploadEpisode = () => {
  const [episodeInput, setEpisodeInput] = useState({
    name: '',
    pay: false,
    orderNum: 0,
  });
  const [uploads, setUploads] = useState([]);
  const [upload, setUpload] = useState('');
  const [pic, setPic] = useState([]);

  const maxSize = 3 * 1024 * 1024;
  const [oversize, setOversize] = useState(false);

  const location = useLocation();
  const pathname = location.pathname.split('/')[3];

  const setPreview = (event) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      console.log(upload);
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

  const onSetUploads = (event) => {
    if (event.target.files[0] && event.target.files[0].size < maxSize) {
      setOversize(false);
      setUploads([...uploads, event.target.files[0]]);
      console.log(uploads);
    } else if (event.target.files[0] && event.target.files[0].size > maxSize) {
      setOversize(true);
    } else if (!event.target.files[0]) {
      setOversize(false);
    }
    event.target.value = '';
  };

  const deleteSingleFile = (index) => {
    let result = [...uploads];
    result[index] = null;
    setUploads(result);
  };

  const uploadEpisode = () => {
    // 에피소드 정보를 먼저 보내서 생성
    // 생성된 에피소드에 urls 업로드후 추가
    const formDataFiles = new FormData();
    const formDataThumbnail = new FormData();
    for (let i = 0; i < uploads.length; i++) {
      if (uploads[i]) formDataFiles.append('files', uploads[i]);
    }
    if (upload) {
      formDataThumbnail.append('file', upload);
    }
    api.post('webtoon/episode/upload/' + pathname, episodeInput).then((res) => {
      if (res.data.ok) {
        if (upload)
          api
            .post(
              'webtoon/episode/upload-thumbnail/' + res.data.episodeId,
              formDataThumbnail,
            )
            .then((res) => {
              console.log(res);
            });
        api
          .post(
            'webtoon/episode/upload-urls/' + res.data.episodeId,
            formDataFiles,
          )
          .then((res) => {
            console.log(res);
          });
      }
    });
    history.push('/my-webtoon/' + pathname);
  };

  useEffect(() => {
    api.get('webtoon/orderNum/' + pathname).then((res) => {
      setEpisodeInput({ ...episodeInput, orderNum: res.data.orderNum });
    });
  }, []);

  return (
    <section className="wrap">
      <form action="">
        <h3>회차(자동계산)</h3>
        <span className="autoNum">{episodeInput.orderNum}</span>
        <h3>제목</h3>
        <label htmlFor="">
          <input
            type="text"
            value={episodeInput.name}
            onChange={({ target }) => {
              setEpisodeInput({
                ...episodeInput,
                name: target.value,
              });
            }}
          />
        </label>
        <h3>결제</h3>
        <ul>
          <li>
            <button
              className={!episodeInput.pay ? 'btn-pay-checked' : ''}
              type="button"
              onClick={() => {
                setEpisodeInput({ ...episodeInput, pay: false });
              }}
            >
              무료
            </button>
          </li>
          <li>
            <button
              className={episodeInput.pay ? 'btn-pay-checked' : ''}
              type="button"
              onClick={() => {
                setEpisodeInput({ ...episodeInput, pay: true });
              }}
            >
              유료
            </button>
          </li>
        </ul>
        <h3>썸네일</h3>

        <label htmlFor="myEpisodeThumbnail" className="label-upload-thumbnail">
          <img src={pic} alt="" />
          upload
        </label>
        <input type="file" id="myEpisodeThumbnail" onChange={setPreview} />
        <h3>원고</h3>
        <ul className="list-episode-image">
          {uploads.map((upload, index) => {
            if (upload)
              return (
                <li className="item-episode-image" key={index}>
                  {upload.name}
                  <button
                    onClick={() => {
                      deleteSingleFile(index);
                    }}
                  >
                    delete
                  </button>
                </li>
              );
          })}
        </ul>
        <label htmlFor="myEpisodeImage" className="label-upload-images">
          upload
        </label>
        <input type="file" id="myEpisodeImage" onChange={onSetUploads} />
        <div className="buttons-submit-episode">
          <button type="button">취소</button>
          <button type="button" onClick={uploadEpisode}>
            등록
          </button>
        </div>
      </form>
    </section>
  );
};
