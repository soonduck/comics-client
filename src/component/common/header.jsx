import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../lib/api';
import { ViewerHeader } from '../webtoon/viewer-header';
import history from '../../lib/history';
import { InfoMenu } from '../modal/info-menu';

export const Header = ({
  dropdown,
  setDropdown,
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
            <button
              type="button"
              onClick={() => {
                pathname ? history.push('/') : document.location.reload();
              }}
            >
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
                <button
                  type="button"
                  className="btn-my-info"
                  onClick={clickDropdown}
                >
                  <i className="fa-solid fa-user" />
                </button>
                {dropdown ? <InfoMenu onLogout={onLogout} /> : ''}
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
