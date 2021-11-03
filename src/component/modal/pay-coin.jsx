import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import api from '../../lib/api';
import history from '../../lib/history';

export const PayCoin = ({ setPay, viewer, pay, onSetEpisode }) => {
  const location = useLocation();
  // 웹툰 정보 페이지에서 올 경우 쿼리스트링이 아닌 패스에 웹툰 아이디 정보가 있다.
  const webtoonId =
    queryString.parse(location.search).webtoonId ||
    location.pathname.split('/')[2];

  const goBack = () => {
    // if (viewer) history.goBack();
    setPay({ pay: false, orderNum: 0 });
  };

  const payCoin = () => {
    console.log(pay.orderNum, webtoonId);
    api
      .get('webtoon/pay-coin/' + pay.orderNum + '?webtoonId=' + webtoonId)
      .then((res) => {
        if (res.data.ok) {
          setPay({ ok: false, orderNum: 0 });
          if (onSetEpisode) onSetEpisode(res.data.episode);
          history.push(
            '/view/episode/' + pay.orderNum + '?webtoonId=' + webtoonId,
          );
        } else if (
          typeof res.data.error === 'string' &&
          res.data.error.includes('결제')
        ) {
          history.push('/charge');
        }
      });
    // 1. 결제 get 요청
    // 2. 결제 성공시 pay.ok = false
    // 2-2. episode get 요청 다시해서 결제내역 체크후 에피소드 받아서 다음 에피소드 화면으로 넘기기
    // 3. 결제 실패시 pay.ok = false
    // 3-2. 충전 모달 충전하시겠습니까<< 띄우기. 충전하기 클릭시 충전 페이지로 history.push
  };

  return (
    <>
      <div className="modal-pay-coin flex">
        <h3>코인을 지불하시겠습니까?</h3>
        <div className="buttons-pay flex">
          <button type="button" onClick={goBack}>
            아니오
          </button>
          <button type="button" onClick={payCoin} className="bold">
            예
          </button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
