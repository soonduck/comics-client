import { useEffect } from 'react';
import api from '../../lib/api';
import { ItemWebtoon } from './item-webtoon';

export const Webtoons = ({
  mainWebtoons,
  onSetMainWebtoons,
  genre,
  page,
  totalPage,
}) => {
  useEffect(() => {
    api.get('webtoon?genre=' + genre + '&page=' + page).then((res) => {
      onSetMainWebtoons(res.data['webtoons']);
      console.log(mainWebtoons);
    });
  }, [genre]);

  return (
    <div className="bottom wrap">
      <section className="section-webtoon-short">
        <ul className="list-webtoon">
          {mainWebtoons.map((webtoon) => (
            <ItemWebtoon
              key={webtoon.id}
              url={webtoon.thumbnailUrl}
              title={webtoon.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
