import api from '../../lib/api';
import history from '../../lib/history';

export const ItemMyEpisode = ({ url, title, createdAt, orderNum, webtoon }) => {
  const onClickEpisode = () => {
    api
      .get('webtoon/view/episode/' + orderNum + '?webtoonId=' + webtoon.id)
      .then((res) => {
        if (res.data.ok) {
          history.push(
            '/view/episode/' + orderNum + '?webtoonId=' + webtoon.id,
          );
          document.location.reload();
        }
      });
  };
  return (
    <li>
      <button onClick={onClickEpisode}>
        <img src={url} alt="" className="thumbnail-episode" />
      </button>
      <button type="button" onChange={onClickEpisode} className="episode-info">
        <span className="episode-title">{title}</span>
        <span className="episode-date">{createdAt}</span>
      </button>
      <div className="edit-episode-buttons">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </li>
  );
};
