import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { ItemWebtoon } from './item-webtoon';

export const Webtoons = ({
  mainWebtoons,
  onSetMainWebtoons,
  selectedGenre,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get('webtoon?genre=' + selectedGenre + '&page=' + page).then((res) => {
      onSetMainWebtoons(res.data['webtoons']);
    });
  }, [selectedGenre]);

  return (
    <div className="bottom wrap">
      <section className="section-webtoon-short">
        <ul className="list-webtoon">
          {mainWebtoons.map((webtoon) => (
            <ItemWebtoon
              key={webtoon.id}
              id={webtoon.id}
              url={webtoon.thumbnailUrl}
              title={webtoon.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
