import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { PayCoin } from '../../component/modal/pay-coin';
import { NeedLogin } from '../../component/modal/need-login';
import { View } from '../../component/webtoon/view';
const queryString = require('query-string');

export const Viewer = ({ episodeId, episode, onSetEpisode, webtoonId }) => {
  const [pay, setPay] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (!episode.name)
      api.get('webtoon/info/episode/' + episodeId).then((res) => {
        // 헤더에 쓸 정보부터 받아옴
        onSetEpisode(res.data.episode);
        if (res.data.episode) {
          // 에피소드가 유료인지 조회해본다.
          api
            .get(
              'webtoon/view/episode/' + episodeId + '?webtoonId=' + webtoonId,
            )
            .then((res) => {
              if (res.data.ok) {
                // 에피소드가 무료거나 이미 구매한 회차일경우 에피소드를 저장하고 화면에 표시
                onSetEpisode(res.data.episode);
              } else if (res.data.error.includes('지불')) {
                // 유료에피소드여서 구매가 필요할경우 지불모달을 띄운다
                setPay(true);
              } else if (res.data.error.includes('로그인')) {
                // 유료에피소드여서 로그인이 필요한 경우 로그인모달을 띄운다.
                setLogin(true);
              }
            });
        }
      });
  }, []);
  return (
    <>
      {pay ? <PayCoin setPay={setPay} viewer={true} /> : ''}
      {login ? <NeedLogin setLogin={setLogin} viewer={true} /> : ''}
      <View episode={episode} />
    </>
  );
};
