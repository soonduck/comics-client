import history from '../../lib/history';

export const ItemWebtoon = ({ id, url, title }) => {
  // functions

  const onClickWebtoon = (id) => {
    history.push('webtoon/' + id);
  };

  return (
    <li className="item-webtoon" key={id}>
      <button
        className="btn-webtoon"
        type="button"
        onClick={() => onClickWebtoon(id)}
      >
        <img src={url} alt="thumbnail" className="thumbnail" />
        <span className="webtoon-title">{title}</span>
      </button>
    </li>
  );
};
