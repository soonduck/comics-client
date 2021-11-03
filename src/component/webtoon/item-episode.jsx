import api from '../../lib/api';
import history from '../../lib/history';

export const ItemEpisode = ({
  url,
  name,
  orderNum,
  createdAt,
  onSetEpisode,
  setPay,
  setLogin,
  webtoon,
}) => {
  const onClickEpisode = () => {
    api
      .get('webtoon/view/episode/' + orderNum + '?webtoonId=' + webtoon.id)
      .then((res) => {
        if (res.data.ok) {
          onSetEpisode(res.data.episode);
          history.push(
            '/view/episode/' + orderNum + '?webtoonId=' + webtoon.id,
          );
          document.location.reload();
        } else if (res.data.error.includes('지불')) {
          setPay({ ok: true, orderNum });
        } else if (res.data.error.includes('로그인')) {
          setLogin(true);
        }
      });
  };

  return (
    <li className="item-episode flex">
      <button onClick={onClickEpisode} type="button">
        <img src={url} alt="" className="small-thumbnail" />
      </button>
      <button
        className="episode-info flex"
        onClick={onClickEpisode}
        type="button"
      >
        <span className="episode-title">{name}</span>
        <span className="episode-date">
          {createdAt.slice(0, 10).split('-').join('.')}
        </span>
      </button>
    </li>
  );
};
