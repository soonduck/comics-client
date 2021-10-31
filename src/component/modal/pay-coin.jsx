import history from '../../lib/history';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const PayCoin = ({ setPay, viewer, orderNum }) => {
  const location = useLocation();
  const webtoonId = queryString.parse(location.search).webtoonId;

  console.log(orderNum);
  const goBack = () => {
    if (viewer) history.goBack();
    setPay(false);
  };

  const payCoin = () => {};

  return (
    <>
      <div className="modal-pay-coin">
        코인을 지불하시겠습니까?
        <div className="buttons-pay">
          <button type="button" onClick={goBack}>
            아니오
          </button>
          <button>예</button>
        </div>
      </div>
      <div className="BG-gray"></div>
    </>
  );
};
