import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { ItemEpisode } from '../../component/webtoon/item-episode';
import { WebtoonInfo } from '../../component/webtoon/webtoon-info';
import { PayCoin } from '../../component/modal/pay-coin';
import { NeedLogin } from '../../component/modal/need-login';
import { TopInfoEpisodes } from '../../component/webtoon/top-info-episodes';

export const Webtoon = ({
  webtoon,
  episodes,
  onSetWebtoon,
  webtoonId,
  onSetEpisode,
}) => {
  const [pay, setPay] = useState({ ok: false, orderNum: 0 });
  const [login, setLogin] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    api.get('webtoon/info/' + webtoonId + '?orderNum=' + 1).then((res) => {
      onSetWebtoon(res.data);
    });
    api.get('comment/webtoon/' + webtoonId).then((res) => {
      if (res.data) setCommentCount(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      {pay.ok ? <PayCoin setPay={setPay} pay={pay} /> : ''}
      {login ? <NeedLogin setLogin={setLogin} /> : ''}
      <WebtoonInfo webtoon={webtoon} commentCount={commentCount} />
      <section className="webtoon-episodes wrap">
        <TopInfoEpisodes
          episodes={episodes}
          onSetWebtoon={onSetWebtoon}
          webtoonId={webtoonId}
        />
        <ul className="list-episode flex">
          {episodes
            ? episodes.map(
                ({ id, thumbnailUrl, createdAt, name, orderNum }) => (
                  <ItemEpisode
                    info={true}
                    key={id}
                    orderNum={orderNum}
                    name={name}
                    id={id}
                    url={thumbnailUrl}
                    createdAt={createdAt}
                    onSetEpisode={onSetEpisode}
                    setPay={setPay}
                    setLogin={setLogin}
                    webtoon={webtoon}
                  />
                ),
              )
            : ''}
        </ul>
      </section>
    </>
  );
};
