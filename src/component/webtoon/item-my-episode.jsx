import api from '../../lib/api';
import history from '../../lib/history';

export const ItemMyEpisode = ({ url, title, createdAt, orderNum, webtoon }) => {
  const onClickEpisode = () => {
    api
      .get('webtoon/view/episode/' + orderNum + '?webtoonId=' + webtoon.id)
      .then((res) => {
        console.log(orderNum, webtoon.id);
        if (res.data.ok) {
          history.push(
            '/view/episode/' + orderNum + '?webtoonId=' + webtoon.id,
          );
          document.location.reload();
        }
      });
  };
  const deleteEpisode = async () => {
    await api
      .get('webtoon/delete-episode/' + orderNum + '?webtoonId=' + webtoon.id)
      .then((res) => {
        console.log(res);
      });
    document.location.reload();
  };
  return (
    <li className="item-my-episode flex">
      <div className="episode-left flex">
        <button onClick={onClickEpisode} className="flex btn-my-episode">
          <img src={url} alt="" className="small-thumbnail" />
        </button>
        <button className="flex btn-my-episode-info" onClick={onClickEpisode}>
          <span className="episode-title">{title}</span>
          <span className="episode-date">{createdAt}</span>
        </button>
      </div>
      <div className="edit-episode-buttons">
        <button>수정</button>
        <button type="button" onClick={deleteEpisode}>
          삭제
        </button>
      </div>
    </li>
  );
};
