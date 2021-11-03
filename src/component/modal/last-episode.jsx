export const LastEpisode = ({ setLast }) => {
  return (
    <>
      <div className="first-notice flex">
        <h3>마지막 에피소드입니다.</h3>
        <div>
          <button className="buttons-notice" onClick={() => setLast(false)}>
            확인
          </button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
