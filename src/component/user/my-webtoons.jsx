import { useEffect } from 'react';
import api from '../../lib/api';
import { ItemMyWebtoon } from '../webtoon/item-myWebtoon';

export const MyWebtoons = ({ onSetMyWebtoons, myWebtoons }) => {
  useEffect(() => {
    api.get('webtoon/get/my-webtoons').then((res) => {
      onSetMyWebtoons(res.data.myWebtoons);
    });
  }, []);
  return (
    <div className="my-webtoon-list">
      <ul className="list-my-webtoon">
        {myWebtoons.map(({ name, thumbnailUrl, id }) => (
          <ItemMyWebtoon name={name} url={thumbnailUrl} key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};
