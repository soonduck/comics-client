import history from '../../lib/history';

export const ItemRecord = ({ id, url, title, updatedAt }) => {
  // functions

  const onClickWebtoon = (id) => {
    history.push('webtoon/' + id);
  };

  return (
    <li className="item-record flex" key={id}>
      <button
        className="btn-record flex"
        type="button"
        onClick={() => onClickWebtoon(id)}
      >
        <img src={url} alt="thumbnail" className="mid-thumbnail" />
        <div className="record-info-text flex">
          <span className="record-title">{title}</span>
          <span className="record-date">
            {updatedAt.slice(0, 10).split('-').join('.')}
          </span>
        </div>
      </button>
    </li>
  );
};
