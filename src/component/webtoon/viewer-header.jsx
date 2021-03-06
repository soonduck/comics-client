import history from '../../lib/history';
import { useLocation } from 'react-router-dom';
import api from '../../lib/api';
import { useState } from 'react';
import { FirstEpisode } from '../modal/first-episode';
import { LastEpisode } from '../modal/last-episode';
import { PayCoin } from '../modal/pay-coin';
import { NeedLogin } from '../modal/need-login';
import { Logo } from '../common/logo';
const queryString = require('query-string');

export const ViewerHeader = ({ episode, onSetEpisode }) => {
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [pay, setPay] = useState({ ok: false, orderNum: 0 });
  const [login, setLogin] = useState(false);

  const location = useLocation();
  const webtoonId = queryString.parse(location.search).webtoonId;

  const nextEpisode = (count) => {
    if (episode.orderNum + count <= 0) {
      setFirst(true);
      return;
    }
    // const webtoonId = queryString.parse(location.search).webtoonId;
    if (count === 1 && episode.isLast) {
      setLast(true);
      return;
    }
    api
      .get(
        'webtoon/view/episode/' +
          (episode.orderNum + count) +
          '?webtoonId=' +
          webtoonId,
      )
      .then((res) => {
        if (res.data.episode && !res.data.episode.pay) {
          // onSetEpisode(res.data.episode);
          history.push(
            '/view/episode/' +
              res.data.episode.orderNum +
              '?webtoonId=' +
              webtoonId,
          );
          document.location.reload();
        } else if (res.data.episode) {
          // onSetEpisode(res.data.episode);
          history.push(
            '/view/episode/' +
              res.data.episode.orderNum +
              '?webtoonId=' +
              webtoonId,
          );
          document.location.reload();
        } else if (res.data.error.includes('지불')) {
          setPay({ ok: true, orderNum: episode.orderNum + count });
        } else if (res.data.error.includes('로그인')) {
          setLogin(true);
        }
      });
    window.scrollTo(0, 0);
  };

  return (
    <>
      {pay.ok ? (
        <PayCoin setPay={setPay} pay={pay} onSetEpisode={onSetEpisode} />
      ) : (
        ''
      )}
      {login ? <NeedLogin setLogin={setLogin} /> : ''}
      {first ? <FirstEpisode setFirst={setFirst} /> : ''}
      {last ? <LastEpisode setLast={setLast} /> : ''}
      <header className="viewer-header flex">
        <div className="titles flex">
          <Logo />
          <h2>
            <button
              onClick={() => {
                history.push('/webtoon/' + webtoonId);
              }}
            >
              {episode.name}
            </button>
          </h2>
        </div>
        <div className="controllers">
          <button className="btn-home">
            <i
              className="fas fa-home"
              onClick={() => {
                history.push('/');
              }}
            />
            홈
          </button>
          <button
            className="btn-list"
            onClick={() => {
              history.push('/webtoon/' + webtoonId);
            }}
          >
            <i className="fa-solid fa-bars" />
            목록
          </button>
          <button className="btn-prev" onClick={() => nextEpisode(-1)}>
            <i className="fa-solid fa-chevron-left" />
            이전편
          </button>
          <button className="btn-next" onClick={() => nextEpisode(1)}>
            다음편
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </header>
    </>
  );
};
