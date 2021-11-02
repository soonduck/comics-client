export const ItemMyEpisode = ({ id, url, title, createdAt }) => {
  return (
    <li>
      <button>
        <img src={url} alt="" className="thumbnail-episode" />
      </button>
      <span className="episode-info">
        <span className="episode-title">{title}</span>
        <span className="episode-date">{createdAt}</span>
      </span>
      <div className="edit-episode-buttons">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </li>
  );
};
