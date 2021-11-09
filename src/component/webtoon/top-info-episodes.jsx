import { useState } from 'react';
import api from '../../lib/api';
import history from '../../lib/history';

export const TopInfoEpisodes = ({ episodes, onSetWebtoon, webtoonId }) => {
  const [recent, setRecent] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const onClickTop = () => {
    setDropdown(!dropdown);
  };
  const onClickBottom = async () => {
    setDropdown(!dropdown);
    await setRecent(!recent);
    await api
      .get('webtoon/info/' + webtoonId + '?orderNum=' + (recent ? 0 : 1))
      .then((res) => {
        onSetWebtoon(res.data);
        console.log(res.data);
      });
  };

  return (
    <div className="total-episode-count flex">
      <span>전체({episodes ? episodes.length : ''})</span>
      <div className={'buttons-episode-order' + (dropdown ? ' border' : '')}>
        <button className="btn-from" type="button" onClick={onClickTop}>
          {recent ? '최신편부터' : '첫편부터'}
          <i className="fa-solid fa-chevron-down" />
        </button>
        {dropdown ? (
          <button
            type="button"
            className="btn-episode-dropdown"
            onClick={onClickBottom}
          >
            {!recent ? '최신편부터' : '첫편부터'}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
