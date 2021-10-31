import { useEffect } from 'react';
import api from '../../lib/api';

export const Webtoon = ({ webtoon, episodes, onSetWebtoon, webtoonId }) => {
  useEffect(() => {
    api.get('webtoon/info/' + webtoonId).then((res) => {
      onSetWebtoon(res.data.webtoon, res.data.episodes);
      console.log(res);
    });
  }, []);
  return <>1234</>;
};
