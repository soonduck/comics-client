export const View = ({ episode, episodeComments }) => {
  return (
    <>
      <div className="images-episode viewer">
        {episode.webtoonUrls
          ? episode.webtoonUrls.map((url, i) => <img src={url} key={i} />)
          : ''}
      </div>
      <div className="bottom-infos wrap flex">
        <div className="viewer-episode-info flex">
          <span>{episode.name}</span>
          <span>{episode.writer ? episode.writer.username : ''}</span>
        </div>
        <div className="bottom-info-right flex">
          <div className="flex">
            <span className="count-name">별점</span>
            <div className="rating-average">
              <i className="fas fa-star" />
              <span>10.0</span>
            </div>
          </div>
          <div className="flex">
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
