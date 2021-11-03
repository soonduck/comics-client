export const TopInfoEpisodes = ({ episodes, my }) => {
  return (
    <div className="total-episode-count flex">
      <span>전체({episodes.length})</span>
      <button className="btn-from" type="button">
        <span>{my ? '최신편부터' : '첫편부터'}</span>
        <i className="fa-solid fa-chevron-down" />
      </button>
    </div>
  );
};
