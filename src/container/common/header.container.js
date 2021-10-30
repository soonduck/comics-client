import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/user.action';
import { Header } from '../../component/common/header';
import { setGenre, setGenres } from '../../redux/webtoon/webtoon.action';

export const HeaderContainer = () => {
  const { token, genres, genre } = useSelector((state) => ({
    token: state?.userReducer.token,
    genres: state?.webtoonReducer.genres,
    genre: state?.webtoonReducer.genre,
  }));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  const onSetGenres = (genres) => dispatch(setGenres(genres));
  const onSetGenre = (genre) => dispatch(setGenre(genre));

  return (
    <Header
      token={token}
      onLogout={onLogout}
      genres={genres}
      onSetGenres={onSetGenres}
      genre={genre}
      onSetGenre={onSetGenre}
    />
  );
};
