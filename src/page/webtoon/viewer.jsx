import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { PayCoin } from '../../component/modal/pay-coin';
import { NeedLogin } from '../../component/modal/need-login';
import { View } from '../../component/webtoon/view';
import { Comments } from '../../component/comment/comments';

export const Viewer = ({
  orderNum,
  episode,
  onSetEpisode,
  webtoonId,
  onSetWebtoon,
}) => {
  const [pay, setPay] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // 웹툰 아이디(쿼리)로 웹툰정보 업데이트
    api.get('webtoon/info/' + webtoonId).then((res) => {
      console.log('webtoonId', webtoonId);
      if (res.data.ok) onSetWebtoon(res.data.webtoon, res.data.episodes);
    });

    if (!episode.name)
      api
        .get('webtoon/info/episode/' + orderNum)
        .then((res) => {
          // 헤더에 쓸 정보부터 받아옴
          onSetEpisode(res.data.episode);
          return res.data;
        })
        .then((res) => {
          if (res.episode) {
            // 에피소드가 유료인지 조회해본다.
            api
              .get(
                'webtoon/view/episode/' + orderNum + '?webtoonId=' + webtoonId,
              )
              .then((res) => {
                console.log(res);
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
      <Comments data={orderNum} />
    </>
  );
};
