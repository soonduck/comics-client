import history from '../../lib/history';
import { useLocation } from 'react-router-dom';
import api from '../../lib/api';
import { useState } from 'react';
import { FirstEpisode } from '../modal/first-episode';
import { LastEpisode } from '../modal/last-episode';
import { PayCoin } from '../modal/pay-coin';
import { NeedLogin } from '../modal/need-login';
const queryString = require('query-string');

export const ViewerHeader = ({ episode, onSetEpisode }) => {
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [pay, setPay] = useState(false);
  const [login, setLogin] = useState(false);

  const location = useLocation();
  const nextEpisode = (count) => {
    if (episode.orderNum + count <= 0) setFirst(true);
    const webtoonId = queryString.parse(location.search).webtoonId;
    if (count === 1 && episode.isLast) setLast(true);
    console.log(webtoonId);
    api
      .get(
        'webtoon/view/episode/' +
          (episode.orderNum + count) +
          '?webtoonId=' +
          webtoonId,
      )
      .then((res) => {
        if (res.data.episode && !res.data.episode.pay) {
          onSetEpisode(res.data.episode);
          history.push(
            '/view/episode/' +
              res.data.episode.orderNum +
              '?webtoonId=' +
              webtoonId,
          );
        } else if (res.data.error.includes('지불')) {
          setPay(true);
        } else if (res.data.error.includes('로그인')) {
          setLogin(true);
        }
      });
  };

  return (
    <>
      {pay ? <PayCoin orderNum={episode.orderNum + 1} setPay={setPay} /> : ''}
      {login ? <NeedLogin setLogin={setLogin} /> : ''}
      {first ? <FirstEpisode setFirst={setFirst} /> : ''}
      {last ? <LastEpisode setLast={setLast} /> : ''}
      <header className="viewer-header">
        <div className="titles">
          <h1 className="logo">
            <button
              onClick={() => {
                history.push('/');
              }}
            >
              soonduck-page
            </button>
          </h1>
          <h2>
            <button
              onClick={() => {
                // history.push('/webtoon/' + webtoonId);
              }}
            >
              {episode.name}
            </button>
          </h2>
        </div>
        <div className="controllers">
          <button className="btn-home">
            <i className="fas fa-home" />홈
          </button>
          <button className="btn-list">
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
