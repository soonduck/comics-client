export const LastEpisode = ({ setLast }) => {
  return (
    <>
      <div className="first-notice">
        <h3>마지막 에피소드입니다.</h3>
        <div className="buttons-notice">
          <button onClick={() => setLast(false)}>확인</button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
