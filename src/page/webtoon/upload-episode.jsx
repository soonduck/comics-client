export const UploadEpisode = () => {
  return (
    <section className="wrap">
      <form action="">
        <h3>회차(자동계산)</h3>
        <span className="autoNum"></span>
        <h3>결제</h3>
        <input type="radio" name="pay" id="free" />
        <label htmlFor="free">무료</label>
        <input type="radio" name="pay" id="pay" />
        <label htmlFor="pay">유료</label>
        <input type="radio" name="pay" id="categoryNotice" />
        <label htmlFor="categoryNotice">공지</label>
        <h3>썸네일</h3>
        <label htmlFor="myEpisodeThumbnail" className="label-upload-thumbnail">
          upload
        </label>
        <input type="file" id="myEpisodeThumbnail" />
        <h3>원고</h3>
        <ul className="list-episode-image">
          <li className="item-episode-image">파일명</li>
        </ul>
        <label htmlFor="myEpisodeImage" className="label-upload-images">
          upload
        </label>
        <input type="file" id="myEpisodeImage" />
        <div className="buttons-submit-episode">
          <button type="button">취소</button>
          <button type="button">등록</button>
        </div>
      </form>
    </section>
  );
};
