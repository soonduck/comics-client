export const ItemWebtoon = ({ key, url, title }) => {
  // functions

  return (
    <li className="item-webtoon" key={key}>
      <button className="btn-webtoon" type="button">
        <img src={url} alt="thumbnail" className="thumbnail" />
        <span className="webtoon-title">{title}</span>
      </button>
    </li>
  );
};
