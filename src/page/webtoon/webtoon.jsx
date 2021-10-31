import { useEffect } from 'react';
import api from '../../lib/api';
import { ItemEpisode } from '../../component/webtoon/item-episode';

export const Webtoon = ({ webtoon, episodes, onSetWebtoon, webtoonId }) => {
  useEffect(() => {
    api.get('webtoon/info/' + webtoonId).then((res) => {
      onSetWebtoon(res.data.webtoon, res.data.episodes);
      console.log(res);
    });
  }, []);
  return (
    <>
      <section className="webtoon-episodes wrap">
        <div className="total-episode-count">
          <span>전체(2)</span>
          <button className="btn-from">
            <span>최신편부터</span>
            <i className="fa-solid fa-chevron-down" />
          </button>
        </div>
        <ul className="list-episode">
          {episodes.map((episode) => (
            <ItemEpisode
              info={true}
              key={episode.id}
              orderNum={episode.orderNum}
              name={webtoon.name}
              id={episode.id}
              url={episode.thumbnailUrl}
              createdAt={episode.createdAt}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
