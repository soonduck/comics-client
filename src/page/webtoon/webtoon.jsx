import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { ItemEpisode } from '../../component/webtoon/item-episode';
import { WebtoonInfo } from '../../component/webtoon/webtoon-info';
import { PayCoin } from '../../component/modal/pay-coin';
import { NeedLogin } from '../../component/modal/need-login';

export const Webtoon = ({
  webtoon,
  episodes,
  onSetWebtoon,
  webtoonId,
  onSetEpisode,
}) => {
  const [pay, setPay] = useState({ ok: false, orderNum: 0 });
  const [login, setLogin] = useState(false);

  useEffect(() => {
    api.get('webtoon/info/' + webtoonId).then((res) => {
      onSetWebtoon(res.data.webtoon, res.data.episodes);
    });
  }, []);
  return (
    <>
      {pay.ok ? <PayCoin setPay={setPay} pay={pay} /> : ''}
      {login ? <NeedLogin setLogin={setLogin} /> : ''}
      <WebtoonInfo webtoon={webtoon} />
      <section className="webtoon-episodes wrap">
        <div className="total-episode-count">
          <span>전체({episodes.length})</span>
          <button className="btn-from" type="button">
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
              name={episode.name}
              id={episode.id}
              url={episode.thumbnailUrl}
              createdAt={episode.createdAt}
              onSetEpisode={onSetEpisode}
              setPay={setPay}
              setLogin={setLogin}
              webtoon={webtoon}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
