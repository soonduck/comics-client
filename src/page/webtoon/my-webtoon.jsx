export const MyWebtoon = () => {
  return (
    <section className="wrap">
      <div className="my-webtoon-info">
        <img src="../../img/thumbnails/1.png" alt="" className="thumbnail" />
        <div className="info-name">
          <h2 className="my-webtoon-name">friends with benefits</h2>
          <span className="my-writer-name">soonduck</span>
        </div>
        <p className="my-webtoon-desc">설명</p>
        <div className="my-webtoon-buttons">
          <button className="btn-new-episode">신규 회차 등록</button>
          <button className="btn-edit-webtoon">작품 정보 수정</button>
          <button className="btn-delete-webtoon">작품 삭제</button>
        </div>
      </div>
      <div className="my-webtoon-episodes">
        <ul className="list-episode">
          <li className="item-episode">
            <button>
              <img
                src="../../img/thumbnails/1.png"
                alt=""
                className="thumbnail-episode"
              />
            </button>
            <span className="episode-info">
              <span className="episode-title">friends with benefits</span>
              <span className="episode-date">2021.10.27</span>
            </span>
            <div className="edit-episode-buttons">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
