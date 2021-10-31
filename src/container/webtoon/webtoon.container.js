import { useDispatch, useSelector } from 'react-redux';
import { Webtoon } from '../../page/webtoon/webtoon';
import { setEpisode, setWebtoon } from '../../redux/webtoon/webtoon.action';
import { useParams } from 'react-router-dom';

export const WebtoonContainer = () => {
  // redux
  const { webtoon, episodes } = useSelector((state) => ({
    webtoon: state?.webtoonReducer.webtoon,
    episodes: state?.webtoonReducer.episodes,
  }));

  // variables
  const dispatch = useDispatch();
  const params = useParams();

  // dispatch for webtoon component
  const onSetWebtoon = (webtoon, episodes) =>
    dispatch(setWebtoon(webtoon, episodes));
  const onSetEpisode = (episode) => dispatch(setEpisode(episode));

  return (
    <Webtoon
      webtoon={webtoon}
      episodes={episodes}
      onSetWebtoon={onSetWebtoon}
      webtoonId={params.id}
      onSetEpisode={onSetEpisode}
    />
  );
};
