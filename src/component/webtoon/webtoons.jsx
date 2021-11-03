import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { ItemWebtoon } from './item-webtoon';
import { login } from '../../redux/user/user.action';

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
    console.log(123);
  }, [selectedGenre]);

  return (
    <div className="bottom">
      <section className="section-webtoon-short">
        <ul className="list-webtoon grid">
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
