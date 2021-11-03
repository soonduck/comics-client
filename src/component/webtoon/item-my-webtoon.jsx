import history from '../../lib/history';

export const ItemMyWebtoon = ({ id, url, name, updatedAt }) => {
  const onClickWebtoon = () => {
    history.push('/my-webtoon/' + id);
  };
  return (
    <li className="item-my-webtoon" key={id}>
      <button onClick={onClickWebtoon} type="button" className="flex">
        <img src={url} alt="" className="mid-thumbnail" />
        <div className="my-webtoon-info-text flex">
          <span className="my-webtoon-title">{name}</span>
          <span className="my-webtoon-date">
            {updatedAt.slice(0, 10).split('-').join('.')}
          </span>
        </div>
      </button>
    </li>
  );
};
