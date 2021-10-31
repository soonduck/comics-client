import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const PayCoin = ({ setPay, viewer, pay }) => {
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
    console.log(pay, webtoonId);
  };

  return (
    <>
      <div className="modal-pay-coin">
        코인을 지불하시겠습니까?
        <div className="buttons-pay">
          <button type="button" onClick={goBack}>
            아니오
          </button>
          <button type="button" onClick={payCoin}>
            예
          </button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
