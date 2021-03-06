import { useEffect } from 'react';
import api from '../../lib/api';
import { ItemMyWebtoon } from '../webtoon/item-my-webtoon';

export const MyWebtoons = ({ onSetMyWebtoons, myWebtoons }) => {
  useEffect(() => {
    api.get('webtoon/get/my-webtoons').then((res) => {
      onSetMyWebtoons(res.data.myWebtoons);
    });
  }, []);
  return (
    <div className="my-webtoon-list">
      <ul className="list-my-webtoon flex">
        {myWebtoons.map(({ name, thumbnailUrl, id, updatedAt }) => (
          <ItemMyWebtoon
            name={name}
            url={thumbnailUrl}
            key={id}
            id={id}
            updatedAt={updatedAt}
          />
        ))}
      </ul>
    </div>
  );
};
