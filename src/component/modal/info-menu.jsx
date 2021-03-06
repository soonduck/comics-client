import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie/lib';
import history from '../../lib/history';

export const InfoMenu = ({ onLogout, user }) => {
  const logout = () => {
    onLogout();
    const cookies = new Cookies();
    cookies.remove('x-jwt');
    history.push('/');
  };

  return (
    <>
      <ul className="list-dropdown">
        <li className="item-dropdown info-coin">
          <span className="title-coin">보유 코인</span>
          <span>
            <span className="bold coin">{user.coin} </span>
            Coin
          </span>
        </li>
        <li className="item-dropdown">
          <Link to={'/charge'}>코인충전</Link>
        </li>
        <li className="item-dropdown">
          <Link to={'/my-info'}>개인정보</Link>
        </li>
        <li className="item-dropdown">
          <Link to={'/webtoon-info'}>작품정보</Link>
        </li>
        <li className="item-dropdown last-dropdown">
          <button type="button" onClick={logout}>
            로그아웃
          </button>
        </li>
      </ul>
    </>
  );
};
