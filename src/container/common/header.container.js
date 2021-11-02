import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/user.action';
import { Header } from '../../component/common/header';
import {
  setEpisode,
  setGenres,
  setViewer,
} from '../../redux/webtoon/webtoon.action';

export const HeaderContainer = ({
  dropdown,
  setDropdown,
  selectedGenre,
  setSelectedGenre,
}) => {
  const { token, genres, genre, viewer, episode, user } = useSelector(
    (state) => ({
      token: state?.userReducer.token,
      user: state?.userReducer.user,
      genres: state?.webtoonReducer.genres,
      genre: state?.webtoonReducer.genre,
      viewer: state?.webtoonReducer.viewer,
      episode: state?.webtoonReducer.episode,
    }),
  );

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  const onSetGenres = (genres) => dispatch(setGenres(genres));

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));

  const onSetViewer = (boolean) => dispatch(setViewer(boolean));

  return (
    <Header
      setSelectedGenre={setSelectedGenre}
      selectedGenre={selectedGenre}
      dropdown={dropdown}
      setDropdown={setDropdown}
      token={token}
      onLogout={onLogout}
      genres={genres}
      onSetGenres={onSetGenres}
      genre={genre}
      viewer={viewer}
      episode={episode}
      onSetEpisode={onSetEpisode}
      onSetViewer={onSetViewer}
      user={user}
    />
  );
};
