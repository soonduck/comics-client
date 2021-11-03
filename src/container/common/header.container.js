import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/user.action';
import { Header } from '../../component/common/header';
import {
  setEpisode,
  setGenres,
  setSelectedGenre,
  setViewer,
} from '../../redux/webtoon/webtoon.action';
import webtoonReducer from '../../redux/webtoon/webtoon.reducer';

export const HeaderContainer = ({}) => {
  const { token, genres, genre, viewer, episode, user, selectedGenre } =
    useSelector((state) => ({
      token: state?.userReducer.token,
      user: state?.userReducer.user,
      genres: state?.webtoonReducer.genres,
      genre: state?.webtoonReducer.genre,
      viewer: state?.webtoonReducer.viewer,
      episode: state?.webtoonReducer.episode,
      selectedGenre: state?.webtoonReducer.selectedGenre,
    }));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  const onSetGenres = (genres) => dispatch(setGenres(genres));

  const onSetEpisode = (episode) => dispatch(setEpisode(episode));

  const onSetViewer = (boolean) => dispatch(setViewer(boolean));

  const onSetSelectedGenre = (id) => dispatch(setSelectedGenre(id));

  return (
    <Header
      selectedGenre={selectedGenre}
      onSetSelectedGenre={onSetSelectedGenre}
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
