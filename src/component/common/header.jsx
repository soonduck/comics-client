import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { ViewerHeader } from '../webtoon/viewer-header';
import history from '../../lib/history';
import { InfoMenu } from '../modal/info-menu';
import { Logo } from './logo';

export const Header = ({
  token,
  onLogout,
  genres,
  onSetGenres,
  viewer,
  onSetViewer,
  episode,
  onSetEpisode,
  webtoonName,
  selectedGenre,
  onSetSelectedGenre,
  user,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [onSearch, setOnSearch] = useState(false);

  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  const toLogin = () => {
    if (token) return;
    history.push('/login');
  };

  const clickDropdown = () => {
    setDropdown(!dropdown);
  };
  useEffect(() => {
    if (!pathname) {
      api.get('webtoon/genres').then((res) => {
        onSetGenres(res.data);
      });
    }
    onSetSelectedGenre(1);
  }, [pathname]);

  useEffect(() => {
    if (pathname === 'view') onSetViewer(true);
    else onSetViewer(false);
  }, [pathname]);

  return viewer ? (
    <ViewerHeader
      episode={episode}
      webtoonName={webtoonName}
      onSetEpisode={onSetEpisode}
    />
  ) : (
    <header>
      <div className="wrap">
        <section className="top-header flex">
          <Logo />
          <div className="header-right flex">
            <form className={'search-form' + (onSearch ? ' on-search' : '')}>
              <label htmlFor="searchInput">
                <input
                  type="text"
                  id="searchInput"
                  onFocus={() => setOnSearch(true)}
                  onBlur={() => setOnSearch(false)}
                />
                <button className="btn-search" type="button">
                  <i className="fas fa-search" />
                </button>
              </label>
            </form>
            {token ? (
              <>
                <button
                  type="button"
                  className="btn-my-info"
                  onClick={clickDropdown}
                  onBlur={() => {
                    setTimeout(() => {
                      setDropdown(false);
                    }, 200);
                  }}
                >
                  <i className="fa-solid fa-user" />
                </button>
                {dropdown ? <InfoMenu user={user} onLogout={onLogout} /> : ''}
              </>
            ) : (
              <>
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
            <ul className="list-genre flex">
              {genres.length ? (
                genres.map(({ id, name }) => (
                  <li
                    key={id}
                    className={
                      'item-genre' +
                      (selectedGenre === id ? ' genre-active' : '')
                    }
                  >
                    <button onClick={() => onSetSelectedGenre(id)}>
                      {name}
                    </button>
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
