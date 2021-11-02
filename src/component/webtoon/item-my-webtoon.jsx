import history from '../../lib/history';

export const ItemMyWebtoon = ({ id, url, name }) => {
  const onClickWebtoon = () => {
    history.push('/my-webtoon/' + id);
  };
  return (
    <li className="item-webtoon" key={id}>
      <button onClick={onClickWebtoon} type="button">
        <img src={url} alt="" className="thumbnail-episode" />
      </button>
      <button className="episode-info" onClick={onClickWebtoon} type="button">
        <span className="webtoon-title">{name}</span>
      </button>
    </li>
  );
};
