export const MyWebtoons = () => {
  return (
    <div className="my-webtoon-list">
      <ul className="list-my-webtoon">
        <li className="item-my-webtoon">
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
        </li>
      </ul>
    </div>
  );
};
