export const WebtoonInfo = ({ webtoon }) => {
  return (
    <section className="webtoon-info wrap">
      <img src={webtoon.thumbnailUrl} alt="" />
      <div className="text-info">
        <div className="top-info">
          <h2 className="webtoon-info-title">{webtoon.name}</h2>
          <span className="total-view">
            <i className="fa-solid fa-eye" />
            2.3K
          </span>
          <span className="total-comment">
            <i className="fa-solid fa-comment" />
            1.2M
          </span>
          <button className="btn-view-all-comment">
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
        <div className="bottom-info">
          <span className="writer">soonduck</span>
        </div>
      </div>
    </section>
  );
};
