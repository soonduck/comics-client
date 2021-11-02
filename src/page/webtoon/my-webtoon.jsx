import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setWebtoon } from '../../redux/webtoon/webtoon.action';
import { ItemMyEpisode } from '../../component/webtoon/item-my-episode';

export const MyWebtoon = () => {
  const { webtoon, episodes } = useSelector((state) => ({
    webtoon: state?.webtoonReducer.webtoon,
    episodes: state?.webtoonReducer.episodes,
  }));

  const dispatch = useDispatch();
  const onSetWebtoon = ({ webtoon, episodes }) =>
    dispatch(setWebtoon(webtoon, episodes));

  const [myWebtoon, setMyWebtoon] = useState({});
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  useEffect(() => {
    api.get('webtoon/get/my-webtoon-info/' + pathname).then((res) => {
      setMyWebtoon(res.data.webtoon);
      onSetWebtoon(res.data);
    });
  }, []);
  return (
    <section className="wrap">
      <div className="my-webtoon-info">
        <img src={webtoon.thumbnailUrl} alt="" className="thumbnail" />
        <div className="info-name">
          <h2 className="my-webtoon-name">{webtoon.name}</h2>
          <span className="my-writer-name">
            {webtoon.writer ? webtoon.writer.username : ''}
          </span>
        </div>
        <p className="my-webtoon-desc">{webtoon.description}</p>
        <div className="my-webtoon-buttons">
          <button className="btn-new-episode">신규 회차 등록</button>
          <button className="btn-edit-webtoon">작품 정보 수정</button>
          <button className="btn-delete-webtoon">작품 삭제</button>
        </div>
      </div>
      <div className="my-webtoon-episodes">
        <ul className="list-episode">
          {episodes.map(({ id, thumbnailUrl, createdAt, name }) => (
            <ItemMyEpisode
              id={id}
              title={name}
              url={thumbnailUrl}
              createdAt={createdAt.slice(0, 10).split('-').join('.')}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
