import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie/lib';
import api from '../../lib/api';
import { ViewerHeader } from '../webtoon/viewer-header';

export const Header = ({
  token,
  onLogout,
  genres,
  onSetGenres,
  genre,
  onSetGenre,
  viewer,
  onSetViewer,
  episode,
  onSetEpisode,
  webtoonName,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  const toLogin = () => {
    if (token) return;
    history.push('/login');
  };

  const dropdownClick = () => {
    setDropdown(!dropdown);
  };

  const logout = () => {
    onLogout();
    const cookies = new Cookies();
    cookies.remove('x-jwt');
  };

  useEffect(() => {
    if (!pathname) {
      api.get('webtoon/genres').then((res) => {
        onSetGenres(res.data);
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === 'view') onSetViewer(true);
    else onSetViewer(false);
  }, [pathname]);

  useEffect(() => {
    setDropdown(false);
  }, [token]);

  return viewer ? (
    <ViewerHeader
      episode={episode}
      webtoonName={webtoonName}
      onSetEpisode={onSetEpisode}
    />
  ) : (
    <header>
      <div className="header-wrap">
        <section className="top-header">
          <h1 className="logo-title">
            <button type="button" onClick={() => history.push('/')}>
              soonduck-page
            </button>
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
                    <button type="button" onClick={logout}>
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
        {pathname ? (
          <></>
        ) : (
          <section className="bottom-header">
            <ul className="list-genre">
              {genres.length ? (
                genres.map(({ id, name }) => (
                  <li
                    key={id}
                    className={
                      'item-genre' + (genre === id ? ' genre-active' : '')
                    }
                  >
                    <button onClick={() => onSetGenre(id)}>{name}</button>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </section>
        )}
      </div>
    </header>
  );
};
