import { useState } from 'react';
import api from '../../lib/api';
import history from '../../lib/history';

export const ChargeCoin = () => {
  const [complete, setComplete] = useState(false);
  const [coin, setCoin] = useState();

  const charge = () => {
    api.post('user/charge', { count: 10 }).then((res) => {
      console.log(res.data.coin);
      setCoin(res.data.coin);
    });
    setComplete(true);
  };

  return (
    <section className="wrap wrap-charge-coin">
      <div className="charge-coin flex">
        <h4 className="coin-icon">
          <i className="fa-solid fa-coins" />
        </h4>
        {complete ? (
          <>
            <h2 className="bold">충전이 완료되었습니다</h2>
            <h3>현재 코인 : {coin}</h3>
            <div className="flex charge-buttons">
              <button
                type="button"
                onClick={() => {
                  setComplete(false);
                }}
                className="btn-charge-more bold"
              >
                더 충전하기
              </button>
              <button
                type="button"
                onClick={() => {
                  history.push('/');
                }}
                className="btn-go-home bold"
              >
                홈으로
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="bold">코인을 충전하시겠습니까?</h2>

            <button
              className="btn-charge-coin bold"
              type="button"
              onClick={charge}
            >
              10코인 충전
            </button>
          </>
        )}
      </div>
    </section>
  );
};
