export const ViewRecodes = () => {
  return (
    <div className="view-records">
      <ul className="list-view-record">
        <li className="item-view-record">
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
          <button className="btn-delete-record">삭제</button>
        </li>
      </ul>
    </div>
  );
};
