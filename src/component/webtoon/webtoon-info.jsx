export const WebtoonInfo = ({ webtoon, commentCount }) => {
  return (
    <section className="webtoon-info wrap flex">
      <img src={webtoon.thumbnailUrl} alt="" className="thumbnail" />
      <div className="text-info flex">
        <div className="top-info">
          <h2 className="webtoon-info-title">{webtoon.name}</h2>
          <div className="total-comment">
            <i className="fa-solid fa-comment" />
            <span>{commentCount}</span>
            <button className="btn-view-all-comment">
              <i className="fa-solid fa-angle-right" />
            </button>
          </div>
        </div>
        <div className="bottom-info">
          <span className="writer">
            {webtoon.writer ? webtoon.writer.username : ''}
          </span>
        </div>
      </div>
    </section>
  );
};
