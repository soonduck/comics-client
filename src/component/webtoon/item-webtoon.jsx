import { useHistory } from 'react-router-dom';

export const ItemWebtoon = ({ id, url, title }) => {
  // functions
  const history = useHistory();

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
