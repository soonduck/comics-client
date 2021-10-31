import { useHistory } from 'react-router-dom';
import api from '../../lib/api';

export const ItemEpisode = ({
  id,
  url,
  info,
  name,
  orderNum,
  createdAt,
  onSetEpisode,
  setPay,
  setLogin,
  webtoon,
}) => {
  const history = useHistory();

  const onClickEpisode = () => {
    api
      .get('webtoon/view/episode/' + orderNum + '?webtoonId=' + webtoon.id)
      .then((res) => {
        if (res.data.ok) {
          onSetEpisode(res.data.episode);
          history.push(
            '/view/episode/' + orderNum + '?webtoonId=' + webtoon.id,
          );
        } else if (res.data.error.includes('지불')) {
          setPay({ ok: true, orderNum });
        } else if (res.data.error.includes('로그인')) {
          setLogin(true);
        }
      });
  };

  return (
    <li className="item-episode" key={id}>
      <button onClick={onClickEpisode} type="button">
        <img src={url} alt="" className="thumbnail-episode" />
      </button>
      <button className="episode-info" onClick={onClickEpisode} type="button">
        <span className="episode-title">{name}</span>
        <span className="episode-date">
          {createdAt.slice(0, 10).split('-').join('.')}
        </span>
      </button>
      {info ? (
        <></>
      ) : (
        <div className="edit-episode-buttons">
          <button>수정</button>
          <button>삭제</button>
        </div>
      )}
    </li>
  );
};
