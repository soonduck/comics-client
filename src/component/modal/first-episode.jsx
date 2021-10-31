export const FirstEpisode = ({ setFirst }) => {
  return (
    <>
      <div className="first-notice">
        <h3>첫번째 에피소드입니다.</h3>
        <div className="buttons-notice">
          <button onClick={() => setFirst(false)}>확인</button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
