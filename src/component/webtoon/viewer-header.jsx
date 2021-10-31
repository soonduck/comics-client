import history from '../../lib/history';

export const ViewerHeader = ({ episode, onSetEpisode }) => {
  const nextEpisode = () => {
    console.log(episode.orderNum);
    console.log(episode);
  };

  return (
    <header className="viewer-header">
      <div className="titles">
        <h1 className="logo">
          <button
            onClick={() => {
              history.push('/');
            }}
          >
            soonduck-page
          </button>
        </h1>
        <h2>{episode.name}</h2>
      </div>
      <div className="controllers">
        <button className="btn-home">
          <i className="fas fa-home" />홈
        </button>
        <button className="btn-list">
          <i className="fa-solid fa-bars" />
          목록
        </button>
        <button className="btn-prev" onClick={nextEpisode}>
          <i className="fa-solid fa-chevron-left" />
          이전편
        </button>
        <button className="btn-next">
          다음편
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </header>
  );
};
