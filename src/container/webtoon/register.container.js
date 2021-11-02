import { Register } from '../../page/webtoon/register';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres } from '../../redux/webtoon/webtoon.action';

export const RegisterContainer = () => {
  const { genres } = useSelector((state) => ({
    genres: state?.webtoonReducer.genres,
  }));

  const dispatch = useDispatch();
  const onSetGenres = (genres) => dispatch(setGenres(genres));

  return <Register genres={genres} onSetGenres={onSetGenres} />;
};
