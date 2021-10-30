import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = ({ token, onLogout }) => {
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();

  const toLogin = () => {
    if (token) return;
    history.push('/login');
  };

  const dropdownClick = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    setDropdown(false);
  }, [token]);

  return (
    <header>
      <div className="header-wrap">
        <section className="top-header">
          <h1 className="logo-title">
            <Link to="/">soonduck-page</Link>
          </h1>
          <div className="header-right">
            <form className="search-form">
              <label htmlFor="searchInput">
                <input type="text" id="searchInput" />
                <button className="btn-search" type="button">
                  <i className="fas fa-search" />
                </button>
              </label>
            </form>
            {token ? (
              <>
                <button type="button" onClick={dropdownClick}>
                  <i className="fa-solid fa-user" />
                </button>
                <ul
                  className={'list-dropdown' + (dropdown ? '' : ' a11yHidden')}
                >
                  <li className="item-dropdown">
                    <Link to={'/'}>개인정보</Link>
                  </li>
                  <li className="item-dropdown">
                    <Link to={'/'}>작품정보</Link>
                  </li>
                  <li className="item-dropdown">
                    <button type="button" onClick={onLogout}>
                      로그아웃
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <>
                {' '}
                <button onClick={toLogin}>Login</button>
                <button>Guest Login</button>
              </>
            )}
          </div>
        </section>
      </div>
    </header>
  );
};
