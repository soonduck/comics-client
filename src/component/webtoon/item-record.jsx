import history from '../../lib/history';

export const ItemRecord = ({ id, url, title }) => {
  // functions

  const onClickWebtoon = (id) => {
    history.push('webtoon/' + id);
  };

  return (
    <li className="item-record" key={id}>
      <button
        className="btn-record"
        type="button"
        onClick={() => onClickWebtoon(id)}
      >
        <img src={url} alt="thumbnail" className="mid-thumbnail" />
        <span className="record-title">{title}</span>
      </button>
    </li>
  );
};
