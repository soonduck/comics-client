import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/user.action';
import { Header } from '../../component/common/header';
import {
  setEpisode,
  setGenre,
  setGenres,
  setViewer,
} from '../../redux/webtoon/webtoon.action';

export const HeaderContainer = ({ dropdown, setDropdown }) => {
  const { token, genres, genre, viewer, episode } = useSelector((state) => ({
    token: state?.userReducer.token,
    genres: state?.webtoonReducer.genres,
    genre: state?.webtoonReducer.genre,
    viewer: state?.webtoonReducer.viewer,
    episode: state?.webtoonReducer.episode,
  }));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  const onSetGenres = (genres) => dispatch(setGenres(genres));
  const onSetGenre = (genre) => dispatch(setGenre(genre));

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));

  const onSetViewer = (boolean) => dispatch(setViewer(boolean));

  return (
    <Header
      dropdown={dropdown}
      setDropdown={setDropdown}
      token={token}
      onLogout={onLogout}
      genres={genres}
      onSetGenres={onSetGenres}
      genre={genre}
      onSetGenre={onSetGenre}
      viewer={viewer}
      episode={episode}
      onSetEpisode={onSetEpisode}
      onSetViewer={onSetViewer}
    />
  );
};
