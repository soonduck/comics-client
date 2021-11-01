export const View = ({ episode, episodeComments }) => {
  return (
    <>
      <div className="images-episode">
        {episode.webtoonUrls
          ? episode.webtoonUrls.map((url, i) => <img src={url} key={i} />)
          : ''}
      </div>
      <div className="bottom-info">
        <div className="episode-info">
          <span>{episode.name}</span>
          <span>{episode.writer ? episode.writer.username : ''}</span>
        </div>
        <div className="bottom-info-right">
          <div>
            <span className="count-name">별점</span>
            <div className="rating-average">
              <i className="fas fa-star"></i>
              <span>10.0</span>
            </div>
          </div>
          <div>
            <span className="count-name">댓글</span>
            <span className="comment-count">
              {episodeComments.commentsCount}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
