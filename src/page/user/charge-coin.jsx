import { useState } from 'react';
import api from '../../lib/api';
import history from '../../lib/history';

export const ChargeCoin = () => {
  const [complete, setComplete] = useState(false);
  const charge = () => {
    api.post('user/charge', { count: 10 }).then((res) => {
      console.log(res.data.coin);
    });
    setComplete(true);
  };

  return (
    <section className="wrap charge-coin">
      {complete ? (
        <>
          <h2>충전이 완료되었습니다</h2>
          <button
            type="button"
            onClick={() => {
              setComplete(false);
            }}
          >
            더 충전하기
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/');
            }}
          >
            홈으로
          </button>
        </>
      ) : (
        <>
          <h2>코인을 충전하시겠습니까?</h2>

          <button type="button" onClick={charge}>
            10코인 충전
          </button>
        </>
      )}
    </section>
  );
};
