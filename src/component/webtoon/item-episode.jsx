export const ItemEpisode = ({ id, url, info, name, orderNum, createdAt }) => {
  return (
    <li className="item-episode" key={id}>
      <button>
        <img src={url} alt="" className="thumbnail-episode" />
      </button>
      <span className="episode-info">
        <span className="episode-title">{`${name} ${orderNum}화`}</span>
        <span className="episode-date">{createdAt}</span>
      </span>
      {info ? (
        <></>
      ) : (
        <div className="edit-episode-buttons">
          <button>수정</button>
          <button>삭제</button>
        </div>
      )}
    </li>
  );
};
